"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "pending">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("pending");
    // Auth + admin dashboard come next — UI shell only for now.
    window.setTimeout(() => setStatus("idle"), 800);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-label-md uppercase tracking-widest text-on-surface-variant">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@upperroom.org"
          className="w-full rounded-lg border border-white/10 bg-surface-container/80 px-4 py-3.5 text-body-md text-on-surface placeholder:text-on-surface/35 transition-colors focus:border-secondary/60 focus:outline-none focus:ring-1 focus:ring-secondary/40"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-label-md uppercase tracking-widest text-on-surface-variant">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full rounded-lg border border-white/10 bg-surface-container/80 px-4 py-3.5 pr-12 text-body-md text-on-surface placeholder:text-on-surface/35 transition-colors focus:border-secondary/60 focus:outline-none focus:ring-1 focus:ring-secondary/40"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-on-surface-variant transition-colors hover:text-secondary"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <span className="material-symbols-outlined text-[22px]">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "pending"}
        className="w-full cursor-pointer bg-secondary px-8 py-4 text-label-md uppercase tracking-widest text-on-secondary shadow-lg shadow-secondary/25 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-95 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "pending" ? "Signing in…" : "Sign In"}
      </button>

      <p className="text-center text-body-md text-on-surface-variant/80">
        Admin access for Upper Room staff.{" "}
        <Link href="/" className="text-secondary underline-offset-4 hover:underline">
          Return home
        </Link>
      </p>
    </form>
  );
}
