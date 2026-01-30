<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('issue', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('project_id')->constrained()->cascadeOnDelete();
            $table->foreignId('creator_id')->constrained('users');
            $table->foreignId('assignee_id')->constrained('users')->nullable()->nullOnDelete();
            $table->string('title');
            $table->text('description');
            $table->string('status');
            $table->string('priority');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('issue');
    }
};
