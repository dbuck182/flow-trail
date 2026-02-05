<?php

use App\Models\User;
use App\Models\Project;
use Mockery\MockInterface;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);


test('Creating a new Issue', function () {

    $user = User::factory()->create();

    // Create a project
    $this->actingAs($user)->post('/projects', [
        'name' => 'project_new',
        'description' => 'Test project!',
    ])->assertRedirect('/dashboard');

    // Fetch the project we just created
    $project = Project::where('name', 'project_new')->firstOrFail();

    // Create an issue for that project
    $this->actingAs($user)->post("/projects/{$project->id}/issues", [
        'title' => 'issue_new',
        'description' => 'Test issue!',
        'priority' => 'Low',
    ])->assertStatus(201);

    // Assert issue exists in DB
    $this->assertDatabaseHas('issues', [
        'title' => 'issue_new',
        'description' => 'Test issue!',
        'priority' => 'Low',
        'project_id' => $project->id,
        'creator_id' => $user->id,
    ]);
});
