<?php

use Illuminate\Support\Facades\Broadcast;
use App\Models\User;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

# Broadcast channel for individual projects
Broadcast::channel('projects.{projectId}', function (User $user, int $projectId) {
    if ($user->mem_projects()->where('projects.id', $projectId)->exists()) {
        return [
            'name' => $user->name,
            'email' => $user->email
        ];
    };
    return false;
});
