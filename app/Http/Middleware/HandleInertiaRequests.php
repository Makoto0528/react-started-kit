<?php

namespace App\Http\Middleware;

use App\Http\Resources\QuoteResource;
use App\Http\Resources\UserResource;
use App\Models\Quote;
use Illuminate\Http\Request;
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

        // @phpstan-ignore-next-line
        return [
            ...parent::share($request),
            'auth' => [
                'user' => fn () : ?UserResource => $this->resolveAuthenticatedUser($request),
            ],
            'quote' => fn () : ?QuoteResource => $this->resolveRandomQuote(),
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }

    /**
     * Retrieves the authenticated user from the request and returns it as a UserResource.
     */
    private function resolveAuthenticatedUser(Request $request) : ?UserResource
    {
        $user = $request->user();

        return $user ? new UserResource($user) : null;
    }

    /**
     * Returns a single random quote.
     */
    private function resolveRandomQuote() : ?QuoteResource
    {
        $quoteRandom = Quote::inRandomOrder()->limit(1)->get();

        return $quoteRandom ? new QuoteResource($quoteRandom) : null;
    }
}
