"use client";

import AuthLayout from "@/layouts/AuthLayout";
import { AuthImageProvider, useAuthImage } from "@/context/AuthImageContext";
import { useEffect } from "react";
import sigin_img from "@/assets/images/signin.jpg";
import SignupForm from "@/components/signupForm";

const SigninContent = () => {
  const { setImgSrc } = useAuthImage();

  useEffect(() => {
    setImgSrc(sigin_img.src);
  }, []);

  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default function SigninPage() {
  return (
    <AuthImageProvider>
      <SigninContent />
    </AuthImageProvider>
  );
}
