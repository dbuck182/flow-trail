<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //

    protected $fillable = [
        'issue_id',
        'event_type',
        'old_value',
        'new_value',
        'note'
    ];

    protected $casts = [
        'old_value' => 'array',
        'new_value' => 'array'
    ];

    /**
     * An issue belongs to an issue.
     */
    public function issue()
    {
        return $this->belongsTo(Issue::class);
    }

    /**
     * An event belongs to a creator (user).
     */
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    /**
     * An event belongs to an assignee(user).
     */

    public function assignee()
    {
        return $this->belongsTo(User::class, 'assignee_id');
    }

}
