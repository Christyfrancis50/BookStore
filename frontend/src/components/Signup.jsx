import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


const Signup = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
   await axios.post("http://localhost:4001/user/signup", userInfo)
   .then((res) => {
      console.log(res.data)
      if(res.data){
        toast.success('Signed Up Successfully!');
        navigate(from, { replace: true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err) => {
      if(err.response){
        console.log(err);
        toast.error("Error:" + err.response.data.message);
      }
      
    });
  };

  return (
    <div className="flex justify-center items-center my-[17%] overflow-y-scroll no-scrollbar">
      <div
        id="pupfrm"
        className="flex flex-col w-[30%] h-[38vw] justify-center items-center border rounded-md shadow-md"
      >
        <div className="w-[100%] px-5">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h1 className="font-bold text-2xl">Signup</h1>
            <div className="py-4 space-y-3">
              <span className="text-lg">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-[100%] px-3 py-2 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="test-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Email  */}
            <div className="py-4 space-y-3">
              <span className="text-lg">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-[100%] px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="test-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Password  */}
            <div className="py-4 space-y-3">
              <span className="text-lg">Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Password"
                className="w-[100%] px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="test-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* button  */}
            <div className="flex justify-between mt-4">
              <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="flex justify-center items-center">
                Have account?{" "}
                <button
                  className="text-blue-600 underline hover:text-white-500 cursor-pointer"
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  {" "}
                  Login
                </button>
              </p>
            </div>
            <Login />
            <Link to="/">
              <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 w-[100%] my-6">
                Back to home
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
