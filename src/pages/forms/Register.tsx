// Libraries
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { z } from "zod";

// Components
import Button from "@/components/common/button/Button";
import AuthLayout from "@/components/layout/auth-layout/AuthLayout";
import InputField from "@/components/common/field/InputField";
import PasswordField from "@/components/common/field/PasswordField";

// Zod Validation Schema
const RegisterSchema = z
  .object({
    email: z.string().email({ message: "Invalid Email Address" }).trim(),
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords doesn't match",
    path: ["confirmPassword"],
  });
type RegisterSchemaType = z.infer<typeof RegisterSchema>;

// Main Component
const Register = () => {
  // React Hook Form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });

  // Submit Function
  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    console.log(data);
    reset();
  };

  // Return JSX
  return (
    <AuthLayout>
      <h1 className="text-2xl md:text-3xl font-extrabold text-orange-500 select-none mb-5 tracking-wider text-shadow-2xs text-shadow-orange-800 z-50">
        Create new account
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col gap-5"
      >
        {/* Email */}
        <div>
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
        </div>

        {/* Username */}
        <div>
          <InputField
            type="text"
            placeholder="Username"
            name="username"
            register={register}
            error={errors.username?.message}
          />
        </div>

        {/* Password */}
        <PasswordField
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        {/* Confirm Password */}
        <PasswordField
          placeholder="Confirm Password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword?.message}
        />

        {/* Button */}
        <Button type="submit" className="relative py-2 w-37.5 rounded-md">
          Register
        </Button>
        <p className="text-white bg-white/10 p-2.5 px-5 rounded-md w-fit">
          Already have an account?
          <Link
            to="/login"
            className="cursor-pointer text-orange-400 ml-2.5 font-extrabold underline hover:text-orange-500"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
