"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AuthImageContextType {
  imgSrc: string | undefined;
  setImgSrc: (src: string | undefined) => void;
}

const AuthImageContext = createContext<AuthImageContextType | undefined>(
  undefined
);

export const AuthImageProvider = ({ children }: { children: ReactNode }) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);

  return (
    <AuthImageContext.Provider value={{ imgSrc, setImgSrc }}>
      {children}
    </AuthImageContext.Provider>
  );
};

export const useAuthImage = () => {
  const context = useContext(AuthImageContext);
  if (!context) {
    throw new Error("useAuthImage must be used within an AuthImageProvider");
  }
  return context;
};
