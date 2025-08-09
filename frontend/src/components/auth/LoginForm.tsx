"use client";

import React, { useState } from "react";
import Button from "../button";
import Link from "next/link";
import useErrorHandler from "@/hooks/useErrorHandler";
import { useDispatch } from "react-redux";
import { setLoginData } from "@/redux/slices/AuthenticationSlice";
import type { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import userLogin from "@/api/UserLogin";

export default function LoginForm() {
  const { error, setError } = useErrorHandler();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleLoginForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const state = await userLogin(formData);

    if (!state?.success) {
      setError(state?.error);
      setIsPending(false);
    } else {
      //make user data acess goblaly
      dispatch(
        setLoginData({
          email: state.data.email,
          firstName: state.data.firstName,
          lastName: state.data.lastName,
        })
      );

      setIsPending(false);
      router.push("/forum");
    }
  };
  const handleLoginGoogle = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/google`;
  };
  const handleLoginFacebook = () => {};

  return (
    <div className="flex flex-col justify-center items-center rounded-lg p-6 gap-6 text-gray-500 bg-white border-1 border-amber-200">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold text-primaryGreen">
          Sign in to your account
        </h1>
        <p>Enter your email and password to access your account</p>
      </div>

      <form
        onSubmit={handleLoginForm}
        className="flex flex-col justify-center items-center gap-4 w-full"
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          className="w-full border-1 border-gray-300 p-2 rounded-md"
          required
        ></input>

        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="current-password"
          className="w-full border-1 border-gray-300 p-2 rounded-md"
          required
        ></input>

        <div className="flex w-full justify-between text-base">
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              id="remeberMe"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            ></input>
            <label htmlFor="remeberMe">Remeber me</label>
          </div>

          <p className="text-green-800">Forgot password?</p>
        </div>

        <Button
          type="submit"
          text={isPending ? "Please wait..." : "Sign In"}
          className="bg-primaryGreen w-full text-white rounded-md p-2 font-semibold"
        />
        {error && <p className="text-red-500">{error}</p>}
      </form>

      <div className="flex w-full items-center justify-center gap-2 text-sm">
        <hr className="flex-grow bg-gray-500"></hr>
        <span>Or continue with</span>
        <hr className="flex-grow bg-gray-500"></hr>
      </div>

      <div className="w-full flex gap-4">
        <Button
          icon="devicon:google"
          text="Google"
          onClick={handleLoginGoogle}
          className="flex-grow text-black font-semibold bg-[#f8fbe7] py-2 px-6 rounded-md border border-gray-300"
        />
        <Button
          text="Facebook"
          onClick={handleLoginFacebook}
          className=" flex-grow text-black font-semibold bg-[#f8fbe7] py-2 px-6 rounded-md border border-gray-300"
        />
      </div>

      <p>
        Don't have an account?{" "}
        <Link href="/register" className="text-primaryGreen">
          Sign up
        </Link>
      </p>
    </div>
  );
}
