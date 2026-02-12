<?php

namespace App\Services;

use App\Models\Issue;
use App\Models\Event;
use App\Models\User;
use App\Models\Project;
use App\Enums\IssueStatus;
use Illuminate\Support\Facades\DB;

class IssueService
{
    public function createIssue(Project $project, User $user, array $issue_data): Issue
    {
        // logic here
        // Will need to create the new issue
        $created_issue = $project->issues()->create(
            [
            'project_id' => $project->id,
            'creator_id' => $user->id,
            'assignee_id' => $user->id,
            'title' => $issue_data['title'],
            'description' => $issue_data['description'],
            'priority' => $issue_data['priority'],
            'status' => IssueStatus::TODO,
    ]);
        $created_event = $user->events()->create(
            ['issue_id' => $created_issue->id,
             'event_type' => 'Issue Creation.'
            ]
        );
        // Also create an event for this
        // Need to figure out how to get the issue id for this
        // Then save it to the database
        return $created_issue;
    }

    public function updateIssue(Issue $issue, array $change_data){
        # look for the differences between the two and then update the status
        $issue->fill($change_data);
        if ($issue->isDirty()){
            return $issue->save();
        }

        return False;
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
