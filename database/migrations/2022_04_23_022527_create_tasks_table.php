<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sprint_id');
            $table->integer('parent_id');
            $table->enum('tag', config('migrations.tasks.tag.value'))->comment(config('migrations.tasks.tag.comment'));
            $table->string('title');
            $table->enum('priority', config('migrations.tasks.priority.value'))->comment(config('migrations.tasks.priority.comment'));
            $table->text('description');
            $table->enum('status', config('migrations.tasks.status.value'))->comment(config('migrations.tasks.status.comment'));
            $table->unsignedInteger('process');
            $table->unsignedInteger('assignee');
            $table->timestamps();
            $table->timestamp('expired_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
