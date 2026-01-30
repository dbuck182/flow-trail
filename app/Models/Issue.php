<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    //

    protected $table = 'issue';

    protected $fillable = [
        'project_id',
        'user_id',
        'title',
        'description',
        'status',
        'priority',
    ];

    /**
     * An issue belongs to a project.
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * An issue belongs to a user (creator or owner).
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

     /**
     * An issue has many events.
     */
    public function events()
    {
        return $this->hasMany(Event::class);
    }

}
