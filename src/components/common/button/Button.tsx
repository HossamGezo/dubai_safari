// Types
type ButtonType = {
  children: React.ReactNode;
} & React.ComponentProps<"button">;
// Main Component
const Button = ({
  children,
  className,
  type = "button",
  ...rest
}: ButtonType) => {
  return (
    <>
      <button
        type={type}
        {...rest}
        className={`
          bg-orange-500 font-bold text-white cursor-pointer
          hover:bg-orange-600 active:bg-orange-500 transition-colors
          duration-300 rounded-full tracking-wider select-none ${className}
        `}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
