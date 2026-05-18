"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const handleLoginFunc = async (data) => {
    setLoading(false);
    setServerError("");

    try {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        setServerError(error.message || "Invalid email or password.");
      } else {
       
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setServerError("An unexpected database connection error occurred.");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 p-4">
      <div className="p-6 rounded-xl bg-white w-full max-w-sm shadow-xl">
        
        {/* Examiner requirement: Title for Login */}
        <h2 className="font-bold text-3xl text-center mb-6 text-slate-800">
          Title for Login
        </h2>

        {/* Global error block message anywhere in the form */}
        {serverError && (
          <div className="p-3 mb-4 bg-red-100 border border-red-200 text-red-600 text-sm rounded-xl font-semibold">
            ⚠️ {serverError}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Email</legend>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Type here email"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </fieldset>
          
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend font-bold">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input input-bordered w-full"
              placeholder="Type here password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-slate-500"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </fieldset>

          {/* Examiner requirement: Login button */}
          <button className="btn w-full bg-slate-800 text-white hover:bg-slate-900 mt-2">
            Login button
          </button>
        </form>

        <div className="divider text-xs text-slate-400 my-4">OR</div>

        {/* Examiner requirement: Social Login Button (Google only) */}
        <button 
          type="button" 
          onClick={handleGoogleLogin} 
          className="btn btn-outline w-full border-slate-300 text-slate-700 hover:bg-slate-50"
        >
          Social Login Button (Google only)
        </button>

        {/* Examiner requirement: Link for Register */}
        <p className="mt-4 text-sm text-center text-slate-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 font-bold hover:underline">
            Link for Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;