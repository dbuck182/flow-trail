<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\
use App\Policies\ProjectPolicy;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ProjectInvitationController extends Controller
{
    //
    use AuthorizesRequests;
    public function create(Project $project)
    {
        #$this->authorize('update', $project);

        return inertia('projects/InvitePage', [
            'project' => $project
        ]);

    }

    public function store(StoreProjectRequest $request, Project $project)
    {

        

    }
}
