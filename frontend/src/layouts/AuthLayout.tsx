import { useAuthImage } from "@/context/AuthImageContext";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const { imgSrc } = useAuthImage();

  return (
    <div className="flex h-screen">
      {/* left side */}
      <div className="w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-primaryGreen text-4xl font-bold">FarmMate</h1>
        {children}
      </div>
      {/* right side */}
      <div className="w-1/2 overflow-hidden">
        <img src={imgSrc} alt="Auth Image" className="object-cover" />
      </div>
    </div>
  );
};

export default AuthLayout;
