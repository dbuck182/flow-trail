<?php

namespace App\Http\Controllers;
use App\Http\Requests\StoreIssueRequest;

use Illuminate\Http\Request;
use App\Services\IssueService;
use App\Models\Project;

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
}
