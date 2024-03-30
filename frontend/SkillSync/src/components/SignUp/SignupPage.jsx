import React from "react";
import signupImg from "../../imageAssets/signupImage.jpg";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("instructor");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const finalData = {
      ...formData,
      accountType,
    };

    toast.success("Signup Successfully");
    console.log("printing Final account data ");
    console.log(finalData);
  }
  return (
    <div>
      <section className="bg-white">
        <div className="flex justify-center min-h-screen">
          {/* left side part */}
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
                Get your free account now.
              </h1>

              <p className="mt-4 text-gray-500">
                Let's get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              <div className="mt-6">
                <h1 className="text-gray-500">Select type of account</h1>

                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <button
                    className={`${
                      accountType === "student"
                        ? "flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none mb-2"
                        : "flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 focus:outline-none mb-2"
                    }`}
                    onClick={() => setAccountType("student")}
                  >
                    <span className="mx-2">Student</span>
                  </button>

                  <button
                    className={`${
                      accountType === "instructor"
                        ? "flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none mb-2"
                        : "flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 focus:outline-none mb-2"
                    }`}
                    onClick={() => setAccountType("instructor")}
                  >
                    <span className="mx-2">Instructor</span>
                  </button>
                </div>
              </div>

              {/* form section */}

              <form
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                onSubmit={submitHandler}
              >
                <label>
                  <p className="block mb-2 text-sm text-gray-600">First Name</p>
                  <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </label>

                <label>
                  <p className="block mb-2 text-sm text-gray-600">Last name</p>
                  <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </label>

                <label>
                  <p className="block mb-2 text-sm text-gray-600">
                    Date of Birth
                  </p>
                  <input
                    required
                    type="date"
                    name="dateOfBirth"
                    onChange={changeHandler}
                    value={formData.dateOfBirth}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </label>

                <label>
                  <p className="block mb-2 text-sm text-gray-600">
                    Email address
                  </p>
                  <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email Address "
                    value={formData.email}
                    autoComplete="username"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </label>

                <label className="relative">
                  <p className="block mb-2 text-sm text-gray-600">Password</p>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    value={formData.password}
                    autoComplete="new-password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <span
                    className="absolute right-3 top-[38px] cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} />
                    ) : (
                      <AiOutlineEye fontSize={24} />
                    )}
                  </span>
                </label>

                <label className="relative">
                  <p className="block mb-2 text-sm text-gray-600">
                    Confirm password
                  </p>
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    autoComplete="new-password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <span
                    className="absolute right-3 top-[38px] cursor-pointer"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} />
                    ) : (
                      <AiOutlineEye fontSize={24} />
                    )}
                  </span>
                </label>

                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize  transform bg-blue-500 rounded-md hover:scale-105 transition-all ease-in-out duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Sign Up </span>
                  <CiLocationArrow1 size={20} />
                </button>
              </form>
            </div>
          </div>
          {/* right side part */}
          <div className="hidden bg-cover lg:block lg:w-2/5">
            <img src={signupImg} alt="Signup" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
