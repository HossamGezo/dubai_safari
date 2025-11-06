// Libraries
import {useForm, type SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
// Components
import Button from "@/components/common/button/Button";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import InputField from "@/components/common/field/InputField";
// Main Component
const Register = () => {
  // Zod Validation Schema
  const loginSchema = z
    .object({
      email: z.string().includes("@", {message: "Invalid Email"}).trim(),
      username: z
        .string()
        .min(3, {message: "Username must be at least 3 characters"}),
      password: z
        .string()
        .min(6, {message: "Password must be at least 6 characters"}),
      confirmPassword: z
        .string()
        .min(6, {message: "Password must be at least 6 characters"}),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords doesn't match",
      path: ["confirmPassword"],
    });
  type LoginSchemaType = z.infer<typeof loginSchema>;
  // React Hook Form
  const {
    handleSubmit,
    register,
    reset,
    formState: {errors},
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
    <>
      <AuthLayout>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative login-form flex flex-col gap-5"
        >
          {/* Email */}
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          {/* Username */}
          <InputField
            type="text"
            placeholder="Username"
            name="username"
            register={register}
            error={errors.username?.message}
          />
          {/* Passowrd */}
          <InputField
            type="password"
            placeholder="password"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          {/* Confirm Password */}
          <InputField
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
          />
          {/* Button */}
          <Button type="submit" className="relative py-2 w-[150px]">
            login
          </Button>
        </form>
      </AuthLayout>
    </>
  );
};

export default Register;
