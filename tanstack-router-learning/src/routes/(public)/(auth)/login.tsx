import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../../../hooks/useAuth";

export const Route = createFileRoute("/(public)/(auth)/login")({
  component: LoginPage,
});

function LoginPage() {
  const auth = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login();

    navigate({
      to: "/profile",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>

          <p className="text-slate-400">Login to continue to your account</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm text-slate-300 mb-2">Email</label>

            <input
              type="email"
              placeholder="you@example.com"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-white
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/30
                placeholder:text-slate-500
              "
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-white
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/30
                placeholder:text-slate-500
              "
            />
          </div>

          <button
            onClick={handleLogin}
            className="
              w-full
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-violet-500
              py-3
              font-semibold
              text-white
              transition
              hover:scale-[1.02]
              hover:opacity-95
              active:scale-[0.98]
            "
          >
            Sign In
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account?
          <span className="ml-1 text-blue-400 cursor-pointer hover:text-blue-300">
            Register
          </span>
        </div>
      </div>
    </div>
  );
}
