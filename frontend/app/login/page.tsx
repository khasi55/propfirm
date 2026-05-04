'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { Loader2, Mail, Lock, ArrowRight, Eye, EyeOff, Shield } from 'lucide-react'
import AuthCard from '@/components/auth/AuthCard'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        // Demo Login Bypass: Redirect to dashboard after a short delay
        setTimeout(() => {
            window.location.href = '/dashboard'
        }, 1000)
    }
    // Prefetch dashboard for instant transition
    useEffect(() => {
        router.prefetch('/dashboard')
    }, [router])

    return (
        <AuthCard
            title="Welcome Back"
            subtitle="Sign in to your trading account"
            footerText="Don't have an account?"
            footerLinkText="Sign up"
            footerLinkHref="/signup"
            error={error}
        >
            <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1" htmlFor="email">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-12 py-3.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                            placeholder="trader@demofunded.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between ml-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider" htmlFor="password">Password</label>
                        <Link href="/forgot-password" className="text-xs text-blue-600 hover:text-blue-700 transition-colors font-semibold">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-12 pr-12 py-3.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 mt-2"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                        <>
                            Log In
                            <ArrowRight className="w-5 h-5" />
                        </>
                    )}
                </button>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500 font-bold tracking-wider">Or Quick Access</span>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        setEmail('demo@demofunded.com');
                        setPassword('password123');
                        setLoading(true);
                        setTimeout(() => {
                            window.location.href = '/dashboard';
                        }, 800);
                    }}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200"
                >
                    <Shield className="w-4 h-4 text-blue-600" />
                    Demo Login
                </button>
            </form>
        </AuthCard>
    )
}
