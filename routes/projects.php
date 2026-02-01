<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

Route::middleware(['auth', 'verified'])->group(function () {

Route::post('/projects', [ProjectController::class, 'store'])
    ->name('projects.store');


});