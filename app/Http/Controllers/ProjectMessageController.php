<?php

namespace App\Http\Controllers;

use App\Events\NewProjectMessage;
use App\Http\Requests\SendProjectMessage;
use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Support\Str;

class ProjectMessageController extends Controller
{
    //

    # Should not create anything but instead broadcast the message
    public function store(SendProjectMessage $request, Project $project){
    
    broadcast(new NewProjectMessage($project, Str::uuid(),
        $request->user()->email,
        $request->message))->toOthers();

    }
}
