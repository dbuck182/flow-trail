<?php

use App\Models\User;
use Mockery;
use Mockery\MockInterface;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);


test('Creating a new project', function () {

    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/projects', ['name' => 'project_new',
                                          'description' => 'Test project!']);

    $response->assertRedirect('/dashboard');

    $this->assertDatabaseHas('projects', [
            'name' => 'project_new',
            'description' => 'Test project!',
            'owner_id' => $user->id,
        ]);

});
