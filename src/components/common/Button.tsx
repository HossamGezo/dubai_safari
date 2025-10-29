// Types
type ButtonType = {
  size?: "sm" | "md";
  customStyles?: string;
};

// Component
const Button = ({size = "sm", customStyles}: ButtonType) => {
  const widthClass = size === "sm" ? "w-36" : "w-md";
  return (
    <>
      <button
        type="button"
        className={`
          bg-orange-500 font-bold text-white cursor-pointer
          hover:bg-orange-600 active:bg-orange-500 transition-colors
          duration-300 rounded-full tracking-wider select-none ${widthClass} ${customStyles}`}
      >
        Search
      </button>
    </>
  );
};
export default Button;
