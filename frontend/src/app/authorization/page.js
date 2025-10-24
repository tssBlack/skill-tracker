"use client";
import { useState } from "react"

function Authorization() {

    const [auth, setAuth] = useState(true)

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/4 border border-(--border-color) rounded-xl p-8 flex flex-col gap-4 bg-(--bg-card)">
                <h1 className="bg-(image:--gradient-primary) text-transparent bg-clip-text font-bold text-3xl">Skill Tracker</h1>
                <form className="flex flex-col gap-6">
                    <p className="text-(--text-muted)">{!auth ? 'Create an account to track your skills' : 'Sign in to your account'}</p>
                    {!auth ? 
                    <label className="flex flex-col gap-2">
                        Full Name
                        <input className="rounded-xl focus:border-(--bg-primary) bg-(--bg-btn) border border-(--border-color) p-2 w-full"
                        placeholder="email@example.com" type="email" required/>
                    </label> 
                    : ''
                    }
                    <label className="flex flex-col gap-2">
                        Email
                        <input className="rounded-xl focus:border-(--bg-primary) bg-(--bg-btn) border border-(--border-color) p-2 w-full"
                        placeholder="email@example.com" type="email" required/>
                    </label>
                    <label className="flex flex-col gap-2">
                        Password
                        <input className="rounded-xl focus:border-(--bg-primary) bg-(--bg-btn) border border-(--border-color) p-2 w-full"
                        placeholder="••••••••" type="password" required/>
                    </label>
                    <input className="bg-(image:--gradient-primary) 
                    bg-(--bg-primary) py-2 rounded-xl border border-(--border-color)
                    hover:bg-(image:--bg-primary-hover)" 
                    type="submit" value={!auth ? 'Sign Up' : 'Sign In'} />
                    <p className="text-(--bg-primary) text-center">{!auth ? `Already have an account? Sign In` : `Don't have an account? Sign Up`}</p>
                </form>
            </div>
        </div>
    )
}

export default Authorization;