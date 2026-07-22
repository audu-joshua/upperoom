import type { Metadata } from "next";
import Image from "next/image";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Admin sign in for Upper Room Cathedral.",
};

export default function LoginPage() {
  return (
    <div className="mx-auto grid w-full max-w-container-max-width grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
      {/* Mobile: welcome first. Desktop: welcome left, form right. */}
      <div className="space-y-5 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/logo.png"
            alt="Upper Room Cathedral"
            width={72}
            height={72}
            className="h-16 w-16 rounded-lg object-cover shadow-md ring-1 ring-white/20 md:h-[72px] md:w-[72px]"
            priority
          />
        </div>
        <p className="text-title-lg font-display text-on-surface">
          Upper Room Cathedral
        </p>
        <p className="text-label-md uppercase tracking-[0.3em] text-secondary">
          Admin Access
        </p>
        <h1 className="text-headline-lg font-display text-on-surface md:text-display-lg md:leading-tight">
          Welcome back
        </h1>
        <p className="mx-auto max-w-md text-body-lg text-on-surface-variant lg:mx-0">
          Sign in to manage sermons, events, gallery uploads, and church content.
        </p>
      </div>

      <div>
        <div className="glass mx-auto w-full max-w-md rounded-xl border border-white/10 p-8 shadow-2xl lg:ml-auto lg:mr-0 md:p-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
