// Libraries
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { z } from "zod";

// Components
import Button from "@/components/common/button/Button";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import InputField from "@/components/common/field/InputField";
import PasswordField from "@/components/common/field/PasswordField";

// Zod Validation Schema
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid Email Address" }).trim(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 Characters" }),
});
type LoginSchemaType = z.infer<typeof loginSchema>;

// Main Component
const Login = () => {
  // React Hook Form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });
  // Submit Function
  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    console.log(data);
    reset();
  };
  // Return JSX
  return (
    <AuthLayout>
      <h1 className="text-2xl md:text-3xl font-extrabold text-orange-500 select-none mb-5 tracking-wider text-shadow-2xs text-shadow-orange-800 z-50">
        Login to your account
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col gap-5"
      >
        <div>
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
        </div>

        <PasswordField
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <Button type="submit" className="relative py-2 w-37.5 rounded-md">
          Login
        </Button>
        <p className="text-white bg-white/15 p-2.5 rounded-md w-fit">
          Forgot Your Password?
          <Link
            to="/reset-password"
            className="cursor-pointer text-orange-400 ml-2.5 font-extrabold underline hover:text-orange-500"
          >
            Reset Password
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
