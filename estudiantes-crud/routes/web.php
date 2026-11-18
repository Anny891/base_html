<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Estudiantes;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hola', [Estudiantes::class, 'index'])
    ->name('estudiantes.index');
