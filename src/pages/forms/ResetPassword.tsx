// Libraries
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { z } from "zod";

// Components
import Button from "@/components/common/button/Button";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import InputField from "@/components/common/field/InputField";

// Zod Validation Schema
const ResetPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid Email Address" }).trim(),
});
type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;

// Main Component
const ResetPassword = () => {
  // React Hook Form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordSchemaType>({
    mode: "onChange",
    resolver: zodResolver(ResetPasswordSchema),
  });

  // Submit Function
  const onSubmit: SubmitHandler<ResetPasswordSchemaType> = (data) => {
    console.log(data);
    reset();
  };

  // Return JSX
  return (
    <AuthLayout>
      <h1 className="text-2xl md:text-3xl font-extrabold text-orange-500 select-none mb-5 tracking-wider text-shadow-2xs text-shadow-orange-800 z-50">
        Enter your email
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
        <div className="flex items-center justify-between">
          <Button type="submit" className="relative py-2 w-37.5 rounded-md">
            Submit
          </Button>
          <p className="text-white bg-white/10 p-2.5 px-5 rounded-md w-fit font-bold">
            Back to
            <Link
              to="/login"
              className="cursor-pointer text-orange-400 ml-2 font-extrabold underline hover:text-orange-500"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
