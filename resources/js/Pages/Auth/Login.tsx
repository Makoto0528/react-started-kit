import { PasswordInput } from '@/Components/PasswordInput'
import { Button } from '@/Components/UI/Button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/UI/Form'
import { Input } from '@/Components/UI/Input'
import AuthLayout from '@/Layouts/AuthLayout'
import { cn } from '@/Lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useForm as useFormInertia } from '@inertiajs/react'
import { LoaderIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useForm as useFormHook } from 'react-hook-form'
import { z } from 'zod'

const loginFormSchema = z.object({
    email: z.string().min(1, { message: 'Please enter your email' }).email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(1, {
            message: 'Please enter your password',
        })
        .min(7, {
            message: 'Password must be at least 7 characters long',
        }),
    remember: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginFormSchema>

const defaultValues: Partial<LoginFormValues> = {
    email: '',
    password: '',
    remember: false,
}

export default function AuthLoginPage() {
    const { post, transform, reset, errors, processing } = useFormInertia(defaultValues)

    const form = useFormHook<LoginFormValues>({
        resolver: zodResolver(loginFormSchema),
        defaultValues,
    })

    function onSubmit(data: LoginFormValues) {
        transform(() => ({
            ...data,
            remember: data.remember ? 'on' : '',
        }))

        post(route('login'), {
            onFinish: () => {
                reset('password')
                form.reset({
                    ...data,
                    password: '',
                })
            },
        })
    }

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            Object.entries(errors).forEach(([key, value]) => {
                form.setError(key as keyof LoginFormValues, {
                    type: 'manual',
                    message: value as string,
                })
            })
        }
    }, [errors, form])

    return (
        <AuthLayout title={'Login'}>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-left">
                    <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
                    <p className="text-muted-foreground text-sm">Enter your email and password below to log into your account</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={cn('grid gap-3')}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    <Link
                                        href="/forgot-password"
                                        className="text-muted-foreground absolute -top-0.5 right-0 text-sm font-medium hover:opacity-75"
                                    >
                                        Forgot password?
                                    </Link>
                                </FormItem>
                            )}
                        />
                        <Button className="relative mt-2" disabled={processing}>
                            {processing && <LoaderIcon className="absolute right-4 animate-spin" />}
                            Login
                        </Button>

                        <div className="relative my-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background text-muted-foreground px-2">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" type="button" disabled={processing}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <defs>
                                        <radialGradient
                                            id="prefix__b"
                                            cx="1.479"
                                            cy="12.788"
                                            fx="1.479"
                                            fy="12.788"
                                            r="9.655"
                                            gradientTransform="matrix(.8032 0 0 1.0842 2.459 -.293)"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset=".368" stop-color="#ffcf09" />
                                            <stop offset=".718" stop-color="#ffcf09" stop-opacity=".7" />
                                            <stop offset="1" stop-color="#ffcf09" stop-opacity="0" />
                                        </radialGradient>
                                        <radialGradient
                                            id="prefix__c"
                                            cx="14.295"
                                            cy="23.291"
                                            fx="14.295"
                                            fy="23.291"
                                            r="11.878"
                                            gradientTransform="matrix(1.3272 0 0 1.0073 -3.434 -.672)"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset=".383" stop-color="#34a853" />
                                            <stop offset=".706" stop-color="#34a853" stop-opacity=".7" />
                                            <stop offset="1" stop-color="#34a853" stop-opacity="0" />
                                        </radialGradient>
                                        <linearGradient
                                            id="prefix__d"
                                            x1="23.558"
                                            y1="6.286"
                                            x2="12.148"
                                            y2="20.299"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset=".671" stop-color="#4285f4" />
                                            <stop offset=".885" stop-color="#4285f4" stop-opacity="0" />
                                        </linearGradient>
                                        <clipPath id="prefix__a">
                                            <path
                                                d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z"
                                                fill="none"
                                            />
                                        </clipPath>
                                    </defs>
                                    <path
                                        d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z"
                                        fill="#fc4c53"
                                    />
                                    <g clip-path="url(#prefix__a)">
                                        <ellipse cx="3.646" cy="13.572" rx="7.755" ry="10.469" fill="url(#prefix__b)" />
                                        <ellipse
                                            cx="15.538"
                                            cy="22.789"
                                            rx="15.765"
                                            ry="11.965"
                                            transform="rotate(-7.12 15.539 22.789)"
                                            fill="url(#prefix__c)"
                                        />
                                        <path
                                            fill="url(#prefix__d)"
                                            d="M11.105 8.28l.491 5.596.623 3.747 7.362 6.848 8.607-15.897-17.083-.294z"
                                        />
                                    </g>
                                </svg>
                                Google
                            </Button>
                            <Button variant="outline" type="button" disabled={processing}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="64"
                                    height="64"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    viewBox="0 0 640 640"
                                >
                                    <path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z" />
                                </svg>
                                Apple
                            </Button>
                        </div>
                    </form>
                </Form>
                <div className="text-center text-sm">
                    Don&apos;t have an account?{' '}
                    <a href="#" className="underline underline-offset-4">
                        Sign up
                    </a>
                </div>
            </div>
        </AuthLayout>
    )
}
