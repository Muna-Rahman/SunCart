"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setPhotoUrl(session.user.image || "");
    }
  }, [session]);

  if (isPending) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-summer-ocean"></span>
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleUpdateInformation = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 🛠️ Updated to the correct method from your documentation
      const { data, error: updateError } = await authClient.updateUser({
        name: name,
        image: photoUrl,
      });

      if (updateError) {
        setError(updateError.message || "Failed to update profile information.");
      } else {
        router.push("/profile");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected network fault occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] bg-[#fafafa] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm">
        
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">
            Update Profile
          </h1>
          <p className="text-sm text-slate-400 font-medium">
            Modify your credentials fields seamlessly
          </p>
        </div>

        <form onSubmit={handleUpdateInformation} className="space-y-5">
          <div className="form-control w-full">
            <label className="label px-1">
              <span className="label-text font-bold text-slate-600">Full Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your preferred name"
              className="input input-bordered w-full rounded-2xl border-slate-200 focus:outline-none focus:border-summer-ocean h-12 text-sm"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label px-1">
              <span className="label-text font-bold text-slate-600">Profile Image URL</span>
            </label>
            <input
              type="url"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="https://example.com/new-avatar.jpg"
              className="input input-bordered w-full rounded-2xl border-slate-200 focus:outline-none focus:border-summer-ocean h-12 text-sm"
              required
            />
          </div>

          {error && (
            <div className="p-4 bg-error/10 border border-error/20 text-error rounded-2xl text-xs font-semibold leading-relaxed">
              ⚠️ {error}
            </div>
          )}

          <div className="flex flex-col gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-block bg-slate-900 hover:bg-summer-ocean border-none text-white h-12 rounded-2xl font-bold transition-all"
            >
              {loading ? <span className="loading loading-spinner loading-sm"></span> : "Update Information"}
            </button>
            
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="btn btn-block btn-ghost text-slate-500 rounded-2xl font-bold h-12"
            >
              Cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}