// Utils
import { cn } from "@/utils/cn";

// Types
type AuthLayoutProps = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;

// Main Component
const AuthLayout = ({ children, className }: AuthLayoutProps) => {
  // Return JSX
  return (
    <div
      className={cn(
        "login relative bg-[url(./images/skyscraper.jpg)] bg-no-repeat bg-cover flex grow w-full flex-col items-center justify-center bg-position-[45%] gap-5",
        className,
      )}
    >
      <div className="overlay absolute inset-0 bg-black/60"></div>
      {children}
    </div>
  );
};

export default AuthLayout;
