<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\ProjectInvite;
use App\Policies\ProjectPolicy;
use App\Enums\ProjectRoles;
use Illuminate\Support\Str;
use App\Http\Requests\StoreProjectInviteRequest;
use App\Http\Requests\UpdateInvitationRequest;
use App\Models\ProjectUser;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\DB;

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


    // Function to accept project Invitation
    public function accept(UpdateInvitationRequest $request, string $projectInviteToken)
    {
        $request->validated();

        # okay so we need to now add this user to the project
        # Then once they are added we can safely delete the request
        $projectInvite = DB::table('project_invites')->where('token', $projectInviteToken)->first();

        $user = $request->user();
        $project_user = new ProjectUser;
        $user->mem_projects()->attach($projectInvite->project_id, ['role' => $projectInvite->role]);

        # Now that the request is saved then we can remove this request
        DB::table('project_invites')->where('token', $projectInviteToken)->delete();

        return redirect()->route('dashboard');
    }

    // Function to deny project Invitation
    public function deny(UpdateInvitationRequest $request, string $projectInviteToken)
    {
        $request->validated();
        # simply delete the request
        DB::table('project_invites')->where('token', $projectInviteToken)->delete();

        return redirect()->route('dashboard');

    }




}
