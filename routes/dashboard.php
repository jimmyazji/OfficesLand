<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\ProductController;

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard/Index');
    })->name('dashboard')->middleware(['auth', 'verified']);
    Route::resource('users', UserController::class, ['as' => 'dashboard'])->except(['create','edit','show']);
    Route::resource('products', ProductController::class, ['as' => 'dashboard'])->except(['create','edit','show']);
    Route::resource('partners', PartnerController::class, ['as' => 'dashboard'])->except(['create','edit','show']);
});