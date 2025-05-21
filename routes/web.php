<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
]));

Route::get('/dashboard', fn () => Inertia::render('Dashboard'));

Route::get('login', fn () => Inertia::render('Auth/Login'))->name('login');

Route::group(['prefix' => 'profile'], function () {
    Route::get('/', fn () => Inertia::render('Profile/General'));
    Route::get('/password', fn () => Inertia::render('Profile/Password'));
    Route::get('/security', fn () => Inertia::render('Profile/Security'));
    Route::get('/appearance', fn () => Inertia::render('Profile/Appearance'));
    Route::get('/billing', fn () => Inertia::render('Profile/Billing'));
    Route::get('/notifications', fn () => Inertia::render('Profile/Notifications'));
    Route::get('/integrations', fn () => Inertia::render('Profile/Integrations'));
});
