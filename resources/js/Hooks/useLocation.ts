import { usePage } from '@inertiajs/react'

export function useLocation() {
    const { url } = usePage();

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

    return new URL(url, baseUrl);
}
