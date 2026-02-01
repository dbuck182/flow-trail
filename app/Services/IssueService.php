<?php

namespace App\Services;

use App\Models\Issue;
use App\Models\Event;
use App\Models\User;
use App\Enums\IssueStatus;
use Illuminate\Support\Facades\DB;

class IssueService
{
    public function createIssue(Project $project, User $creator, array $issue_data, array $event_data): Issue
    {
        // logic here
        // Will need to create the new issue
        $created_issue = $project->issues()->create(
            array_merge($issue_data, [
            'project_id' => $project->id,
            'creator_id' => $creator->id,
            'status' => IssueStatus::TODO,
        ]));
        $created_event = $creator->events()->create(
            array_merge($event_data, ['issue_id' => $created_issue->id,

            ])
        );
        // Also create an event for this
        // Need to figure out how to get the issue id for this
        // Then save it to the database
        return $created_issue;
    }

    public function changeStatus(Issue $issue, IssueStatus $newStatus, User $actor): void
    {
        // logic here

        // Make sure that this transition is allowed
        if (! $issue->status->canTransitionTo($newStatus)){
            throw ValidationException::withMessages([
                'status' => "Cannot transition from {$issue->status->value} to {$newStatus->value}",
            ]);
            
        };
        // If so then update the issue and create an event for this change
        DB::transaction(function () {
            $issue->update(['status' => $newStatus]);

            $actor->events()->create([
            'issue_id' => $issue->id,
            'event_type' => 'status_changed',
            'old_value' => ['status' => $oldStatus->value],
            'new_value' => ['status' => $newStatus->value],
            ]);

        });
        
    }
}
