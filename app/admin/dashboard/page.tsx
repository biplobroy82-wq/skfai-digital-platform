"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between border-b border-yellow-500 p-6">
        <h1 className="text-3xl font-bold text-yellow-400">
          SKFAI CMS Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
        >
          Logout
        </button>
      </header>

      <main className="p-8">
        <div className="rounded-xl border border-yellow-500 p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Welcome Admin 👋
          </h2>

          <p className="text-gray-300">
            Login Successful!
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-yellow-500 p-5">
              <h3 className="text-xl font-semibold text-yellow-400">
                Hero Section
              </h3>
              <p className="mt-2 text-gray-400">
                Manage Homepage Hero
              </p>
            </div>

            <div className="rounded-lg border border-yellow-500 p-5">
              <h3 className="text-xl font-semibold text-yellow-400">
                Portfolio
              </h3>
              <p className="mt-2 text-gray-400">
                Manage Portfolio Items
              </p>
            </div>

            <div className="rounded-lg border border-yellow-500 p-5">
              <h3 className="text-xl font-semibold text-yellow-400">
                Testimonials
              </h3>
              <p className="mt-2 text-gray-400">
                Manage Testimonials
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}