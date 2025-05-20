export type UserResource = {
    id: number
    name: string
    email: string
    email_verified_at?: string
    profile_photo_url: string
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: UserResource
    }
}
