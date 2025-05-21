<?php

namespace App\Spiders\Processors;

use App\Models\Quote;
use RoachPHP\ItemPipeline\ItemInterface;
use RoachPHP\ItemPipeline\Processors\ItemProcessorInterface;
use RoachPHP\Support\Configurable;

class EloquentItemProcessor implements ItemProcessorInterface
{
    use Configurable;

    public function processItem(ItemInterface $item) : ItemInterface
    {
        $data = $item->all();

        Quote::updateOrCreate(
            [
                'phrase' => $data['phrase'],
                'author' => $data['author'],
            ],
            [
                'author_info' => $data['author_info'],
            ]
        );

        return $item;
    }
}
