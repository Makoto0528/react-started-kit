<?php

use App\Spiders\DailyQuoteSpider;
use Illuminate\Support\Facades\Schedule;
use RoachPHP\Roach;

Schedule::call(function () {
    Roach::collectSpider(DailyQuoteSpider::class);
})->daily();
