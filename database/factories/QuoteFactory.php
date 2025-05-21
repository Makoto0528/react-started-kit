<?php

namespace Database\Factories;

use App\Models\Quote;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Quote>
 */
class QuoteFactory extends Factory
{
    protected $model = Quote::class;

    public function definition() : array
    {
        return [
            'phrase' => fake()->sentence(),
            'author' => fake()->name(),
            'author_info' => fake()->company(),
        ];
    }
}
