"use client";

import { AuthImageProvider, useAuthImage } from "@/context/AuthImageContext";
import AuthLayout from "@/layouts/AuthLayout";
import { useEffect } from "react";
import login_img from "@/assets/images/login.jpg";
import LoginForm from "@/components/auth/LoginForm";

const LoginContent = () => {
  const { setImgSrc } = useAuthImage();

  useEffect(() => {
    setImgSrc(login_img.src);
  }, []);

  const handleLogin = (email: string, password: string) => {
    console.log(email, password);
  };

  return (
    <AuthLayout>
      <LoginForm onLogin={handleLogin} />
    </AuthLayout>
  );
};

export default function LoginPage() {
  return (
    <AuthImageProvider>
      <LoginContent />
    </AuthImageProvider>
  );
}
