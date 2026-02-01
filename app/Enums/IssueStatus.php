<?php

namespace App\Enums;

enum IssueStatus: string
{
    case TODO = 'todo';
    case IN_PROGRESS = 'in-progress';
    case REVIEW = 'review';
    case DONE = 'done';


    public function allowedTransition(): array
    {
        return match ($this){
            self::TODO => [self::IN_PROGRESS],
            self::IN_PROGRESS => [self::TODO, self::REVIEW],
            self::REVIEW => [self::IN_PROGRESS, self::DONE],
            self::DONE => [self::REVIEW],
        };
    }


    public function canTransitionTo(self $next): bool
    {
        return in_array($next, $this->allowedTransition(), true);
    }
}
