"use client";

import React, { useActionState, useEffect, useState } from "react";
import Button from "../button";
import Link from "next/link";
import { userRegister } from "@/actions/AuthActions";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [state, action, isPending] = useActionState(userRegister, null);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLoginGoogle = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/google`;
  };
  const handleLoginFacebook = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/facebook`;
  };

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    } else setError(state?.error);
  }, [state]);

  return (
    <div className="flex flex-col justify-center items-center rounded-lg p-6 gap-6 text-gray-500 bg-white border-1 border-amber-200 xl:max-w-[520px]">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold text-primaryGreen">
          Create an account
        </h1>
        <p>Enter your informations to create your FarmMate account</p>
      </div>
      <form
        action={action}
        className="flex flex-col justify-center items-center gap-4 w-full"
      >
        <div className="w-full flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            autoComplete="given-name"
            className="border-1 w-full border-gray-300 p-2 rounded-md"
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            autoComplete="family-name"
            className="border-1 w-full border-gray-300 p-2 rounded-md"
          ></input>
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          className="w-full border-1 border-gray-300 p-2 rounded-md"
        ></input>

        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="new-password"
          className="w-full border-1 border-gray-300 p-2 rounded-md"
        ></input>
        <p className="w-full text-sm">
          Password must be at least 8 characters long and include a number and a
          special character
        </p>
        {/* <div className="w-full text-base">
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            ></input>
            <label htmlFor="terms">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
        </div> */}

        <Button
          type="submit"
          text={isPending ? "registering..." : "Create Account"}
          onClick={() => setError(null)}
          className="bg-primaryGreen w-full text-white rounded-md p-2 font-semibold"
        />
        {error && <p className="text-red-500">{error}</p>}
      </form>

      <div className="flex w-full items-center justify-center gap-2 text-sm">
        <hr className="flex-grow bg-gray-500"></hr>
        <span>Or sign up with</span>
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
          icon="logos:facebook"
          onClick={handleLoginFacebook}
          className=" flex-grow text-black font-semibold bg-[#f8fbe7] py-2 px-6 rounded-md border border-gray-300"
        />
      </div>

      <p>
        Already have an account?{" "}
        <Link href="/login" className="text-primaryGreen">
          Login
        </Link>
      </p>
    </div>
  );
}
