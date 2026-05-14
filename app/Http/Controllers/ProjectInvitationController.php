<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\ProjectInvite;
use App\Policies\ProjectPolicy;
use App\Enums\ProjectRoles;
use Illuminate\Support\Str;
use App\Http\Requests\StoreProjectInviteRequest;
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

    public function store(StoreProjectInviteRequest $request, Project $project)
    {
    # implement this at some point
    #this->authorize('create', $projectInvite);
        $request->validated();
        $project->invites()->create([
            'email' => $request->email,
            'role' => ProjectRoles::MEMBER,
            'token' => Str::orderedUuid(),
        ]);
        return back()->with('message', 'Invitation sent successfully!');
    }

    public function update()
    {
        return back();
    }

    public function index(Request $request)
    {
        $request->user()->incomingInvites();
    }
}
