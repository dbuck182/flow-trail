<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

protected $fillable = [
        'name',
        'description',
    ];

    /**
     * A project belongs to a user (owner).
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * A project has many issues.
     */
    public function issues()
    {
        return $this->hasMany(Issue::class);
    }

}