<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up() : void
    {
        Schema::create('quotes', function (Blueprint $table) : void {
            $table->id();
            $table->text('phrase');
            $table->string('author');
            $table->string('author_info');
            $table->timestamps();
        });
    }

    public function down() : void
    {
        Schema::dropIfExists('quotes');
    }
};
