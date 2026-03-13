<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class IssueCreationController extends Controller
{
    public function show(Project $project)
    {
        return Inertia::render('projects/IssueCreationPage', [
            'project' => $project
        ]);
    }
}
