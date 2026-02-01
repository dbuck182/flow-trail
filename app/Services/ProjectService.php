<?php

namespace App\Services;

use App\Models\Project;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class ProjectService {


    public function createProject(User $user, array $data) : Project
    {
    // Do a transaction on creating a Project
    // Transaction should occur because need event to occur and Project
    // Currently an event needs an issue id so events do not track project creations
    $new_project = $user->projects()->create([
        'name' => $data['name'],
        'description' => $data['description']
    ]);
    return $new_project;
    }

    public function deleteProject(Project $project){
        $project->delete();
    }

    public function updateProject(
            Project $project,
            ?string $new_name = null,
            ?string $new_description = null): Project{
        $updates = [];

        if ($new_name !== null){
            $updates['name'] = $new_name;
        }

        if ($new_description !== null){
            $updates['description'] = $new_description;
        }

        if ($updates){
            $project->update($updates);
        }

        return $project;
    }

}