<?php

use App\Http\Controllers\IssueController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\IssueCreationController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::post('/projects', [ProjectController::class, 'store'])
        ->name('projects.store');

    Route::get('/projects/{project}', [ProjectController::class, 'show'])
        ->name('projects.show');

    Route::get('/projects', [ProjectController::class, 'index'])
        ->name('projects');
    
    Route::get('/projects/{project}/createissue', [IssueCreationController::class, 'show'])
        ->name('createissue.show');

    Route::post('/projects/{project}/issues', [IssueController::class, 'store'])
        ->name('issues.store');

    Route::get('/projects/{project}/issues', [IssueController::class, 'index']);

    Route::get('/projects/{project}/issues/{issue}', [IssueController::class, 'show']);

    Route::put('/projects/{project}/issues/{issue}', [IssueController::class, 'update']);

});
