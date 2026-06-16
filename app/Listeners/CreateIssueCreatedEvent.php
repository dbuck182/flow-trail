<?php

namespace App\Listeners;

use App\Events\IssueCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class CreateIssueCreatedEvent
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(IssueCreated $event): void
    {
        //
        # Here we are going to want to create an Event in the DB for this
        /** @var \App\Models\User $user */
        $user = User::find($event->userId, ['*']);
        if ($user) {
            $user->events()->create([
                'issue_id' => $event->issue->id,
                'event_type' => 'IssueCreation',
                'note' => 'Project: ' . $event->issue->project_id
            ]);
        }
    }
}
