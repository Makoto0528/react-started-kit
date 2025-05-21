<?php

namespace App\Spiders;

use App\Spiders\Middleware\WithoutCertificateValidation;
use App\Spiders\Processors\EloquentItemProcessor;
use Generator;
use RoachPHP\Downloader\Middleware\RequestDeduplicationMiddleware;
use RoachPHP\Extensions\LoggerExtension;
use RoachPHP\Extensions\StatsCollectorExtension;
use RoachPHP\Http\Response;
use RoachPHP\Spider\BasicSpider;
use RoachPHP\Spider\ParseResult;
use Symfony\Component\DomCrawler\Crawler;

class DailyQuoteSpider extends BasicSpider
{
    public array $startUrls = [
        'https://proverbia.net/frase-del-dia/',
    ];

    public array $downloaderMiddleware = [
        RequestDeduplicationMiddleware::class,
        WithoutCertificateValidation::class,
    ];

    public array $itemProcessors = [
        EloquentItemProcessor::class,
    ];

    public array $extensions = [
        LoggerExtension::class,
        StatsCollectorExtension::class,
    ];

    public int $concurrency = 2;

    public int $requestDelay = 1;

    /**
     * @return Generator<ParseResult>
     */
    public function parse(Response $response) : Generator
    {
        $items = $response->filter('blockquote')
            ->each(fn (Crawler $node) : array => [
                'phrase' => $node->filter('p')->text(),
                'author' => $node->filter('footer a')->text(),
                'author_info' => $node->filter('footer em')->text(),
                'tags' => $node->filter('.badge a')->each(fn (Crawler $node) : string => $node->text()),
            ]);

        $items = array_filter($items, 'is_array');

        foreach ($items as $item) {
            yield $this->item($item);
        }
    }
}
