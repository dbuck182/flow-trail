<?php

namespace App\Enums;

enum ProjectRoles: string
{
    case OWNER = 'owner';
    case ADMIN = 'admin';
    case MEMBER = 'member';
    case VIEWER = 'viewer';

    public function label(): string
    {
        return match($this) {
            self::OWNER => 'Project Owner',
            self::ADMIN => 'Administrator',
            self::MEMBER => 'Team Member',
            self::VIEWER => 'View Only',
        };
    }
}