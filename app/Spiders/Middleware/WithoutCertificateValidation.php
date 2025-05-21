<?php

namespace App\Spiders\Middleware;

use RoachPHP\Downloader\Middleware\RequestMiddlewareInterface;
use RoachPHP\Http\Request;
use RoachPHP\Support\Configurable;

class WithoutCertificateValidation implements RequestMiddlewareInterface
{
    use Configurable;

    public function handleRequest(Request $request) : Request
    {
        return $request->addOption('verify', false);
    }
}
