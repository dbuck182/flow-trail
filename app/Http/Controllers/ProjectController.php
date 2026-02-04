<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreProjectRequest;
use App\Services\ProjectService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use App\Models\Project;

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

    public function index(Request $request) {
        return Inertia::render('projects', [
            'project_list' => $request->user()->projects()->latest()->get(),
        ]);
    }

    public function show(Project $project) {

        return Inertia::render('projects/Show', [
            'project' => $project
        ]);
    }

}
