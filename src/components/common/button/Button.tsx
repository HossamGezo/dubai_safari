// Utils
import { cn } from "@/utils/cn";

// Types
type ButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<"button">;

// Main Component
const Button = ({
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      {...rest}
      className={cn(
        "bg-orange-500 font-bold text-white cursor-pointer hover:bg-orange-600 active:bg-orange-500 transition-colors duration-300 rounded-full tracking-wider select-none",
        className,
      )}
    >
      {children}
    </button>
  );
};
export default Button;
