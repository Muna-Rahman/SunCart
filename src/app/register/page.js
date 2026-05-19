"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const handleRegisterFunc = async (data) => {
    setServerError("");
    const { email, name, photo, password } = data;

    try {
      const { data: res, error } = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        image: photo || undefined, 
        callbackURL: "/login",     
      });

      if (error) {
        setServerError(error.message || "Registration failed. Please check your data.");
      } else {
        router.push("/login");
      }
    } catch (err) {
      setServerError("Sign up failed. Please check your network and try again.");
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
        
        {}
        <h2 className="font-bold text-3xl text-center mb-6 text-blue-800">
         Registration
        </h2>

        {}
        {serverError && (
          <div className="p-3 mb-4 bg-red-100 border border-red-200 text-red-600 text-sm rounded-xl font-semibold">
            ⚠️ {serverError}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Name</legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Type your name here"
              {...register("name", {
                required: "Name field is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </fieldset>

          {}
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Photo-url(link)</legend>
            <input
              type="url"
              className="input input-bordered w-full"
              placeholder="Give a photo url here"
              {...register("photo", {
                required: "Photo URL field is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend font-bold">Email</legend>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Type your email here"
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
              placeholder="Give e strong 8 letter password here"
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

          {}
          <button className="btn w-full bg-slate-800 text-white hover:bg-slate-900 mt-2">
            Register
          </button>
        </form>

        <div className="divider text-xs text-slate-400 my-4">OR</div>

        {}
        <button 
          type="button" 
          onClick={handleGoogleLogin} 
          className="btn btn-outline w-full border-slate-300 text-slate-700 hover:bg-slate-50"
        >
          Use Google account to log in
        </button>

        {}
        <p className="mt-4 text-sm text-center text-slate-600">
          Already registered?{" "}
          <Link href="/login" className="text-blue-500 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;