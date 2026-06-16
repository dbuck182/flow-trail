<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Enums\ProjectRoles;

class ProjectInvite extends Model
{
    //

    protected $fillable = [
        'email',
        'token',
        'role'
    ];

    protected $casts = [
        'role' => ProjectRoles::class,
    ];

    public function project(){
        $this->belongsTo(Project::class);
    }

    public function user(){
        $this->belongsTo(User::class, 'email', 'email');
    }
}
