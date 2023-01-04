<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

Route::get('locale/{locale}', function ($locale) {
    app()->setLocale($locale);
    session()->put('locale', $locale);
    return redirect()->back(303);
})->name('locale');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'phpVersion' => PHP_VERSION,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
    ]);
});

require __DIR__ . '/auth.php';
require __DIR__ . '/dashboard.php';
