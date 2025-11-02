// Types
type ButtonType = {
  customStyles?: string;
  children: React.ReactNode;
};
// Main Component
const Button = ({customStyles, children}: ButtonType) => {
  return (
    <>
      <button
        type="button"
        className={`
          bg-orange-500 font-bold text-white cursor-pointer
          hover:bg-orange-600 active:bg-orange-500 transition-colors
          duration-300 rounded-full tracking-wider select-none ${customStyles}
        `}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
