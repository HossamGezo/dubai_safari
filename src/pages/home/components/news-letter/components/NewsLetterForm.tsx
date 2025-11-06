// Liberaries
import {useForm, type SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
// Components
import Button from "@/components/common/button/Button";
import InputField from "@/components/common/field/InputField";
// Zod Validation
const inboxSchema = z.object({
  email: z.string().includes("@", {message: "Invalid Email"}).trim(),
});
// Types
type inboxSchemaType = z.infer<typeof inboxSchema>;
// Main Component
const NewsLetterForm = () => {
  // Form Submition
  const {
    handleSubmit,
    register,
    reset,
    formState: {errors},
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(inboxSchema),
  });
  // SubmitHanderl
  const onSubmit: SubmitHandler<inboxSchemaType> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <form
        className="news-letter-form w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          type="email"
          placeholder="Your Email"
          name="email"
          register={register}
          error={errors.email?.message}
          className="w-full bg-white px-2.5 max-md:py-2.5 md:py-3 lg:py-4 xl:py-5  border-b-2 outline-0 caret-orange-300 border-b-orange-300 rounded-t-lg"
        />
        <Button
          type="submit"
          className="max-md:w-[100px] w-[150px] mt-3 max-md:py-1 md:py-2 lg:py-3"
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};
export default NewsLetterForm;
