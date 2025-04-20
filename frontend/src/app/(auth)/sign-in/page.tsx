"use client";

import AuthLayout from "@/layouts/AuthLayout";
import { AuthImageProvider, useAuthImage } from "@/context/AuthImageContext";
import { useEffect } from "react";
import sigin_img from "@/assets/images/signin.jpg";

const SigninContent = () => {
  const { setImgSrc } = useAuthImage();

  useEffect(() => {
    setImgSrc(sigin_img.src);
  }, []);

  return <AuthLayout>HIIII</AuthLayout>;
};

export default function SigninPage() {
  return (
    <AuthImageProvider>
      <SigninContent />
    </AuthImageProvider>
  );
}
