<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


Route::get('/', function () {
    return ['Laravel' => app()->version()];
});
Route::get('/user', [UserController::class, 'show'])->middleware(['auth:sanctum']);

