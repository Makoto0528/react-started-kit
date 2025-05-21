<?php

namespace Database\Factories;

use App\Models\Quote;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class QuoteFactory extends Factory
{
    protected $model = Quote::class;

    public function definition() : array
    {
        return [
            'phrase' => $this->faker->word(),
            'author' => $this->faker->word(),
            'author_info' => $this->faker->word(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
