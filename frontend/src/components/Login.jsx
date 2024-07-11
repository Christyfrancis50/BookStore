import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged In Successfully!");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.message);
          setTimeout(() => {}, 2000)
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-8">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h1 className="font-bold text-2xl">Login</h1>
            {/* Email  */}
            <div className="py-4 space-y-3">
              <span className="text-lg">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                id="email"
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
                id="password"
                className="w-[100%] px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="test-sm  text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* button  */}
            <div className="flex justify-between mt-4">
              <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="flex justify-center items-center">
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 underline hover:text-white-500 cursor-pointer"
                >
                  {" "}
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
