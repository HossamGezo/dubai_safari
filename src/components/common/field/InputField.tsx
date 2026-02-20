// Libraries
import type { Path, UseFormRegister, FieldValues } from "react-hook-form";

// Utils
import { cn } from "@/utils/cn";

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
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={cn(
          "bg-white w-full md:w-87.5 h-12.5 px-2.5 rounded-sm outline-0 caret-orange-500",
          className,
        )}
      />
      <div>
        {error && <span className="text-red-400 text-sm">{error}</span>}
      </div>
    </>
  );
};

export default InputField;
