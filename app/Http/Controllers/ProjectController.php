<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreProjectRequest;
use App\Services\ProjectService;
use Illuminate\Http\RedirectResponse;

class ProjectController extends Controller
{
    //

    public function store(
        StoreProjectRequest $request,
        ProjectService $projectService
    ) : RedirectResponse {
        $projectService->createProject(
            $request->user(),
            $request->validated()
        );
        
        return redirect()->route('dashboard');
    }

}
