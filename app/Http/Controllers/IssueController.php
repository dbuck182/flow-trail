<?php

namespace App\Http\Controllers;
use App\Http\Requests\StoreIssueRequest;

use Illuminate\Http\Request;
use App\Services\IssueService;
use App\Models\Project;
use Inertia\Inertia;
use App\Models\Issue;

class IssueController extends Controller
{
    //
    // COME BACK TO THIS
     public function store(
        StoreIssueRequest $request,
        IssueService $issueService,
        Project $project
    ) {
        $issueService->createIssue(
            $project,
            $request->user(),
            $request->validated(),
        );
        
        return response('Issue Saved', 201);
    }

    public function index(Project $project) {
        return $project()->issues()->latest()->get();
    }


    public function show(Project $project, Issue $issue) {
        return Inertia::render('projects/issues/ShowIssue', [
            'project' => $project,
            'issue' => $issue
        ]);
    }
}
