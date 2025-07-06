import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import {
  IoLockClosedOutline,
  IoEyeOutline,
  IoFemale,
  IoMaleSharp,
  IoEyeOffOutline,
} from "react-icons/io5";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import AgeSlider from "./AgeSlider";
import GoalSlider from "./GoalSlider";
import ActivityLevel from "./ActivityLevel";
import { z } from "zod";
import WeightSlider from "./weightSlider";
import HeightSlider from "./heightSlider";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

// Define the form data interface
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  goal: string;
  activityLevel: string;
}

// Step-specific schemas
const step1Schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      ),
    rePassword: z.string().min(8, "Confirm password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

const step2Schema = z.object({
  gender: z.enum(["Male", "Female"], { message: "Gender is required" }),
});

const step3Schema = z.object({
  age: z.number().min(18, "You must be at least 18 years old"),
});

const step4Schema = z.object({
  weight: z
    .number()
    .min(30, "Weight must be at least 30 kg")
    .max(300, "Weight must be at most 300 kg"),
});

const step5Schema = z.object({
  height: z
    .number()
    .min(100, "Height must be at least 100 cm")
    .max(250, "Height must be at most 250 cm"),
});

const step6Schema = z.object({
  goal: z.string().min(1, "Fitness goal is required"),
});

const step7Schema = z.object({
  activityLevel: z.enum(["level1", "level2", "level3", "level4", "level5"], {
    message: "Activity level must be one of: level1, level2, level3, level4, level5",
  }),
});

// Full schema for final submission
const formSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      ),
    rePassword: z.string().min(8, "Confirm password must be at least 8 characters"),
    gender: z.enum(["Male", "Female"], { message: "Gender is required" }),
    age: z.number().min(18, "You must be at least 18 years old"),
    height: z
      .number()
      .min(100, "Height must be at least 100 cm")
      .max(250, "Height must be at most 250 cm"),
    weight: z
      .number()
      .min(30, "Weight must be at least 30 kg")
      .max(300, "Weight must be at most 300 kg"),
    goal: z.string().min(1, "Fitness goal is required"),
    activityLevel: z.string().min(1, "Activity level is required"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
    gender: "",
    height: 0,
    weight: 0,
    age: 0,
    goal: "",
    activityLevel: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleRePasswordVisibility = () => setShowRePassword(!showRePassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    let isValid = true;
    let validationSchema;

    switch (step) {
      case 1:
        validationSchema = step1Schema;
        break;
      case 2:
        validationSchema = step2Schema;
        break;
      case 3:
        validationSchema = step3Schema;
        break;
      case 4:
        validationSchema = step4Schema;
        break;
      case 5:
        validationSchema = step5Schema;
        break;
      case 6:
        validationSchema = step6Schema;
        break;
      case 7:
        validationSchema = step7Schema;
        break;
      default:
        validationSchema = z.object({});
    }

    const result = validationSchema.safeParse(formData);
    if (!result.success) {
      result.error.errors.forEach((err) => toast.error(err.message));
      isValid = false;
    }

    if (isValid) setStep((prev) => Math.min(prev + 1, 7));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      formSchema.parse(formData);
      const apiData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        rePassword: formData.rePassword,
        gender: formData.gender.toLowerCase(),
        age: formData.age,
        height: formData.height,
        weight: formData.weight,
        goal: formData.goal,
        activityLevel: formData.activityLevel,
      };

      const response = await axios.post(
        "https://fitness.elevateegy.com/api/v1/auth/signup",
        apiData,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      toast.success("Registration successful!");
      console.log("API response:", response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => toast.error(err.message));
      } else if (axios.isAxiosError(error)) {
        console.log("API Error:", error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred during registration.");
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAgeChange = (age: number) => setFormData((prev) => ({ ...prev, age }));
  const handleWeightChange = (weight: number) => setFormData((prev) => ({ ...prev, weight }));
  const handleHeightChange = (height: number) => setFormData((prev) => ({ ...prev, height }));
  const handleGoalChange = (goal: string) => setFormData((prev) => ({ ...prev, goal }));
  const handleActivityLevelChange = (activityLevel: string) =>
    setFormData((prev) => ({ ...prev, activityLevel }));

  return (
    <div
      className="flex h-screen"
      style={{
        background: "linear-gradient(135deg, #1a1a1a, #3a3a3a)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="relative hidden h-screen w-1/2 md:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/cover.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "60% auto",
          }}
        ></div>
      </div>
      <div className="bg-custom-orange-900 w-0.5"></div>
      <div className="relative flex max-h-screen flex-1 items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            background:
              'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000") center/cover',
            filter: "blur(86px)",
            opacity: 0.3,
          }}
        ></div>
        <div className="z-10 w-full max-w-xl">
          <div className="rounded-2xl">
            <div className="text-custom-white-900 to-amber-500 p-6">
              <p className="text-center text-lg">{step === 1 && "Hey There"}</p>
              <h2 className="mx-auto flex justify-center text-4xl font-bold">
                {step === 1 && "Create an Account"}
              </h2>
            </div>
            <div>
              <form onSubmit={step === 7 ? handleSubmit : (e) => e.preventDefault()}>
                {step === 1 && (
                  <div className="relative flex flex-1 items-center justify-center px-8">
                    <div className="z-10 w-10/12 max-w-xl">
                      <div className="border-custom-white-800 overflow-hidden rounded-4xl border">
                        <div className="px-8 py-4">
                          <div className="space-y-3">
                            <p className="text-custom-white-900 text-center text-xl font-semibold">
                              Register
                            </p>
                            <div className="relative">
                              <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="text-custom-white-800 w-full rounded-4xl border border-gray-700 bg-gray-800 px-10 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="First Name"
                              />
                              <span className="text-custom-white-800 absolute top-1/2 left-3 -translate-y-1/2 transform">
                                <FiUser />
                              </span>
                            </div>
                            <div className="relative">
                              <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="text-custom-white-800 w-full rounded-4xl border border-gray-700 bg-gray-800 px-10 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Last Name"
                              />
                              <span className="text-custom-white-800 absolute top-1/2 left-3 -translate-y-1/2 transform">
                                <FiUser />
                              </span>
                            </div>
                            <div className="relative">
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="text-custom-white-800 w-full rounded-4xl border border-gray-700 bg-gray-800 px-10 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Email"
                              />
                              <span className="text-custom-white-800 absolute top-1/2 left-3 -translate-y-1/2 transform">
                                <MdOutlineMail />
                              </span>
                            </div>
                            <div className="relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength={8}
                                className="text-custom-white-800 w-full rounded-4xl border border-gray-700 bg-gray-800 px-10 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Password"
                              />
                              <span className="text-custom-white-800 absolute top-1/2 left-3 -translate-y-1/2 transform">
                                <IoLockClosedOutline />
                              </span>
                              <span
                                className="text-custom-white-800 absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer text-2xl"
                                onClick={togglePasswordVisibility}
                              >
                                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                              </span>
                            </div>
                            <div className="relative">
                              <input
                                type={showRePassword ? "text" : "password"}
                                name="rePassword"
                                value={formData.rePassword}
                                onChange={handleChange}
                                required
                                minLength={8}
                                className="text-custom-white-800 w-full rounded-4xl border border-gray-700 bg-gray-800 px-10 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Confirm Password"
                              />
                              <span className="text-custom-white-800 absolute top-1/2 left-3 -translate-y-1/2 transform">
                                <IoLockClosedOutline />
                              </span>
                              <span
                                className="text-custom-white-800 absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer text-2xl"
                                onClick={toggleRePasswordVisibility}
                              >
                                {showRePassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                              </span>
                            </div>
                          </div>
                          <div className="text-end">
                            <a
                              href="/forget-password"
                              className="text-custom-orange-900 inline-block cursor-pointer border-b pt-2.5 font-semibold"
                            >
                              Forget Password?
                            </a>
                          </div>
                          <div className="flex items-center justify-center py-2.5">
                            <div className="border-custom-white-800 w-24 border-t"></div>
                            <span className="text-custom-white-800 mx-4">Or</span>
                            <div className="border-custom-white-800 w-24 border-t"></div>
                          </div>
                          <div className="flex justify-center gap-4">
                            <button
                              type="button"
                              className="bg-custom-black-700 text-custom-white-800 flex h-10 w-10 items-center justify-center rounded-full"
                            >
                              <FaFacebookF className="text-lg" />
                            </button>
                            <button
                              type="button"
                              className="bg-custom-black-700 text-custom-white-800 flex h-10 w-10 items-center justify-center rounded-full text-lg"
                            >
                              <FaGoogle />
                            </button>
                            <button
                              type="button"
                              className="bg-custom-black-700 text-custom-white-800 flex h-10 w-10 items-center justify-center rounded-full text-lg"
                            >
                              <FaApple />
                            </button>
                          </div>
                          <div className="mt-2 flex justify-end">
                            <button
                              type="button"
                              onClick={nextStep}
                              className="text-custom-white-900 bg-custom-orange-900 mx-auto flex w-3/4 items-center justify-center gap-2 rounded-3xl px-8 py-2 transition-all hover:cursor-pointer"
                            >
                              Register
                            </button>
                          </div>
                          <div className="text-custom-white-900 mt-2 text-center text-sm">
                            Already Have An Account?{" "}
                            <a href="#" className="text-custom-orange-900 underline">
                              Login
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="flex items-center justify-center">
                    <div className="rounded-xl p-8 backdrop-blur-md">
                      {/* Progress Indicator */}
                      <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-transparent">
                        {/* Orange Arc */}
                        <svg
                          className="absolute inset-0 h-full w-full rotate-[10deg]"
                          viewBox="0 0 36 36"
                        >
                          <path
                            className="text-custom-orange-900"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="100"
                            strokeDashoffset="90"
                            d="M18 2
     a 16 16 0 0 1 0 32
     a 16 16 0 0 1 0 -32"
                          />
                        </svg>

                        {/* Step Text */}
                        <span className="text-custom-white-900 z-10 text-sm font-medium">1/6</span>
                      </div>

                      <div className="mb-4 text-center">
                        <h2 className="text-custom-white-900 text-3xl font-bold">
                          TELL US ABOUT YOURSELF!
                        </h2>
                        <p className="text-custom-white-900 mt-2">We Need To Know Your Gender</p>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-4">
                            {["Male", "Female"].map((gender) => (
                              <button
                                key={gender}
                                type="button"
                                onClick={() => setFormData((prev) => ({ ...prev, gender }))}
                                className={`mx-auto flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-full border border-white transition-all ${
                                  formData.gender === gender
                                    ? "text-custom-white-800 bg-white"
                                    : "text-custom-white-900 bg-transparent"
                                }`}
                              >
                                <span className="text-custom-white-900 text-2xl">
                                  {gender === "Male" ? <IoMaleSharp /> : <IoFemale />}
                                </span>
                                <span className="mt-1">{gender}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="mt-8 flex justify-between">
                          <button
                            type="button"
                            onClick={nextStep}
                            className="text-custom-white-900 bg-custom-orange-900 mx-auto flex w-3/4 items-center justify-center gap-2 rounded-3xl px-8 py-2 transition-all hover:cursor-pointer"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="d-flex items-center justify-center space-y-6 p-8">
                    <AgeSlider onAgeChange={handleAgeChange} />
                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="text-custom-white-900 bg-custom-orange-900 mx-auto flex w-3/4 items-center justify-center gap-2 rounded-3xl px-8 py-2 transition-all hover:cursor-pointer"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
                {step === 4 && (
                  <div className="d-flex items-center justify-center space-y-6 p-8">
                    <WeightSlider onWeightChange={handleWeightChange} />
                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="text-custom-white-900 bg-custom-orange-900 mx-auto flex w-3/4 items-center justify-center gap-2 rounded-3xl px-8 py-3 transition-all hover:cursor-pointer"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
                {step === 5 && (
                  <div className="d-flex items-center justify-center space-y-6">
                    <HeightSlider onHeightChange={handleHeightChange} />
                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="text-custom-white-900 bg-custom-orange-900 mx-auto flex w-3/4 items-center justify-center gap-2 rounded-3xl px-8 py-3 transition-all hover:cursor-pointer"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
                {step === 6 && (
                  <div className="flex flex-col items-center justify-center">
                    <GoalSlider onGoalChange={handleGoalChange} />
                    <div className="mt-8 flex w-100 justify-between">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="text-custom-white-900 bg-custom-orange-900 mx-auto flex w-3/4 items-center justify-center gap-2 rounded-3xl px-8 py-3 transition-all hover:cursor-pointer"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
                {step === 7 && (
                  <div className="flex flex-col items-center justify-center">
                    <ActivityLevel onActivityChange={handleActivityLevelChange} />
                    <div className="mt-8 flex w-100 justify-between">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`text-custom-white-900 bg-custom-orange-900 mx-auto flex w-3/4 items-center justify-center gap-2 rounded-3xl px-8 py-3 transition-all hover:cursor-pointer hover:to-emerald-700 ${
                          isSubmitting ? "cursor-not-allowed opacity-50" : ""
                        }`}
                      >
                        {isSubmitting ? "Submitting..." : "Complete Registration"}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default MultiStepForm;
