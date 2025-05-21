<?php

namespace App\Http\Middleware;

use App\Models\Quote;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request) : ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request) : array
    {
        /** @var Collection<int, Quote> $quotes */
        $quotes = Cache::remember('share_quotes', 60, fn () => Quote::inRandomOrder()->limit(20)->get());

        // @phpstan-ignore-next-line
        return [
            ...parent::share($request),
            'auth' => [
                'user' => null,
            ],
            'quote' => fn () => $quotes->random(),
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
