<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Models\Project;
use App\Services\ProjectService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    //

    public function store(
        StoreProjectRequest $request,
        ProjectService $projectService
    ): RedirectResponse {
        $projectService->createProject(
            $request->user(),
            $request->validated()
        );

        return redirect()->route('dashboard');
    }

    public function index(Request $request)
    {   # Here we want to return mem_projects b/c this will be all of the shared ones too
        return Inertia::render('projects', [
            'project_list' => $request->user()->mem_projects()->latest()->get(),
        ]);
    }

    public function show(Project $project)
    {

        return Inertia::render('projects/Show', [
            'project' => $project,
            'issues' => $project->issues()->latest()->get(),
        ]);
    }
}
