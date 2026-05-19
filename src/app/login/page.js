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
    setLoading(true); 
    setServerError(""); 

    try {
      const response = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });
      
      if (response?.error) {
        setServerError("Invalid email or password.");
      } else {
        router.push("/");
      }
    } catch (err) {
      setServerError("Something went wrong. Please check your network and try again.");
    } finally {
      setLoading(false);
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
        
        <h2 className="font-bold text-3xl text-center mb-6 text-blue-800 mt-4">
          LOGIN
        </h2>

        {serverError && (
          <div className="p-3 mb-4 bg-red-100 border border-red-200 text-red-600 text-sm rounded-xl font-semibold">
            ⚠️ {serverError}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold text-xl mt-0.5">Email</legend>
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
          
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold text-xl">Password</legend>
            
            <div className="relative w-full flex items-center">
              <input
                type={isShowPassword ? "text" : "password"}
                className="input input-bordered w-full pr-10" 
                placeholder="Type here password"
                {...register("password", {
                  required: "Password field is required",
                })}
              />
              <span
                className="absolute right-3 cursor-pointer text-slate-500 hover:text-slate-700 flex items-center"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </fieldset>
          
          <button className="btn w-full bg-slate-950 text-white hover:bg-slate-900 mt-2">
            Login
          </button>
        </form>

        <div className="divider text-xs text-slate-400 my-4">OR</div>

        <button 
          type="button" 
          onClick={handleGoogleLogin} 
          className="btn btn-outline w-full border-slate-300 text-blue-900 hover:bg-slate-50"
        >
          Log in using your Google account
        </button>

        <p className="mt-4 text-sm text-center text-slate-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;