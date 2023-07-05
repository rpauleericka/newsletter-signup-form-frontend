import { useForm } from "react-hook-form";
import Image from "next/image";

export const SignUpForm = ({ signUp }) => {
  const {
    register, //to register each field and track the changes (inputchange,...)
    handleSubmit, //function called after submitting the form
    watch, //when you want to watch the input change
    formState: { errors }, //contains validation errors
  } = useForm();

  const submitSignupForm = (data) => {
    console.log(data);
    if (data.hasOwnProperty("email")) {
      signUp(data?.email);
    }
  };

  return (
    <div className="md:h-screen md:flex md:flex-col md:justify-center md:items-center">
      <div className="md:bg-white md:rounded md:rounded-2xl md:grid md:grid-cols-2 md:mx-5 md:w-[50rem]">
        <div className="h-72 w-full md:w-auto md:h-min md:m-5 md:order-last">
          <img
            src="assets/images/illustration-sign-up-desktop.svg"
            className="h-full w-full object-cover rounded rounded-b-lg"
            alt="Sign up illustration"
          />
        </div>
        <div className="m-5 space-y-5 md:p-5 md:flex md:flex-col md:justify-center">
          <h1 className="text-5xl font-bold text-darkSlateGrey">
            Stay updated!
          </h1>
          <p className="text-base font-medium">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="space-y-1 text-base font-medium">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <form onSubmit={handleSubmit(submitSignupForm)} noValidate>
            <div className="">
              <div className="flex items-center">
                <label
                  htmlFor="Enter your email"
                  className="flex-1 py-2 font-bold text-sm"
                >
                  Email address
                </label>
                {errors.email && (
                  <span className="text-tomato font-semibold text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <input
                type="email"
                {...register("email", {
                  required: "Valid email required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Valid email required",
                  },
                })}
                placeholder="email@company.com"
                className={`block w-full p-3 rounded rounded-lg cursor-pointer border ${
                  errors.email
                    ? "text-tomato focus:outline-none border-red-400 bg-red-300 bg-opacity-20 "
                    : "hover:border-black text-gray bg-transparent"
                }}`}
                name="email"
              />
              <button
                type="submit"
                className="bg-darkSlateGrey text-white text-sm tracking-wide font-semibold p-4 my-5 w-full text-center rounded-lg hover:bg-gradient-to-r from-tomato to-orange-600"
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
