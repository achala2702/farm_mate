import { useAuthImage } from "@/context/AuthImageContext";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const { imgSrc } = useAuthImage();

  return (
    <div className="flex my-6 lg:m-0 lg:h-screen">
      {/* left side */}
      <div className="w-full mx-4 sm:mx-36 lg:mx-6 xl:m-0 lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-primaryGreen text-4xl font-bold">FarmMate</h1>
        {children}
      </div>
      {/* right side */}
      <div className="hidden lg:block h-screen lg:w-1/2 overflow-hidden">
        <img src={imgSrc} alt="Auth Image" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default AuthLayout;
