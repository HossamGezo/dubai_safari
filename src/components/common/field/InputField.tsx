// React Hook Form
import type {Path, UseFormRegister, FieldValues} from "react-hook-form";
// Types
type InputFieldProps<T extends FieldValues> = {
  type: "text" | "email" | "password";
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
} & React.ComponentProps<"input">;
// Main Component
const InputField = <T extends FieldValues>({
  type,
  placeholder,
  name,
  register,
  error,
  className,
}: InputFieldProps<T>) => {
  const customStyles = className;
  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={
          customStyles
            ? customStyles
            : "bg-white max-md:w-[250px] w-[350px] h-[50px] px-2.5 rounded-sm outline-0 caret-orange-500"
        }
      />
      {error && <span className="text-red-400 text-sm">{error}</span>}
    </div>
  );
};

export default InputField;
