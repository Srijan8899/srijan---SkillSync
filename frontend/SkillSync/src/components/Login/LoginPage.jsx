import React from "react";
import loginImg from "../../imageAssets/loginImage.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const navigation = useNavigate();

 
  function submitHandler(event) {
    event.preventDefault();
    // Send POST request to backend
    fetch('http://localhost:8000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        // Handle success response
        return response.json();
      } else {
        // Handle error response
        throw new Error('Login failed');
      }
    })
    .then(data => {
      // Handle successful login
      console.log('Login successful:', data);
      toast.success("Login Successfully")
      // You can perform additional actions here, such as redirecting to another page
      navigation("/instructor/dashboard")
    })
    .catch(error => {
      // Handle error
      console.error('Login error:', error.message);
      // Show error message to the user, for example using toast.error
      toast.error('Login failed. Please try again.');
    });
  }
  
  return (
    <div>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        {/* Left: Image  */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src={loginImg}
            alt="Placeholder Image"
            className="object-cover w-full h-full "
          />
        </div>
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>

          {/* Form Started */}
          <form onSubmit={submitHandler}>
            {/* Username Input */}
            <label className="mb-7">
              <p className="block text-gray-600">Email Address</p>
              <input
                required
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter your Email address"
                name="email"
                autoComplete="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 placeholder:text-sm"
              />
            </label>

            {/* Password Input  */}
            <label className="mb-4 relative">
              <p className="block text-gray-600">Password</p>
              <input
                required
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={changeHandler}
                name="password"
                placeholder="Enter Password"
                autoComplete="current-password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 placeholder:text-sm"
              />
              {/* show password icon */}
              <span
                className="absolute cursor-pointer right-4 top-[4.2rem]"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} />
                ) : (
                  <AiOutlineEye fontSize={24} />
                )}
              </span>
            </label>

            {/* Login Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mt-4">
              Login
            </button>
          </form>
          {/* Sign up  Link */}
          <NavLink to='/signup'> 
            <div className="mt-6 text-blue-500 text-center">
              <div className="hover:underline">Sign up Here</div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
