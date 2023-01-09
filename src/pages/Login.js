import React from "react";
import { useState } from "react";
import { login } from "../controllers/authController";
import Toaster from "../utils/toaster";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    if (username === "") Toaster.error("Username cannot be Empty");
    else if (password === "") Toaster.error("Password cannot be Empty");
    login({
      username,
      password,
    });
  };

  return (
    <>
      <div className="h-5/6">
        <div className="h-2/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p className="text-sm">Login</p>
          <p className="text-3xl">Please enter your</p>
          <p className="text-3xl">details</p>
        </div>
        <div className="h-5/6">
          <div className="flex flex-col items-center justify-around w-full">
            <label
              htmlFor="first_name"
              className="block w-5/6 text-sm font-medium  text-opacity-50 text-darkGray-500 dark:text-darkGray"
            >
              Username
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-faintGray-500 border  text-opacity-50 border-faintGray-500 text-textGray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-faintBlue-600 block w-full p-5 dark:bg-faint-700 dark:faintGray-500 dark:placeholder-textGray-500 mb-1 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-5/6"
              placeholder="Type Your username here"
              value={username}
              onChange={(el) => {
                setUsername(el.target.value);
              }}
              required
            />
          </div>

          <div className="flex flex-col items-center justify-around w-full">
            <label
              htmlFor="first_name"
              className="block w-5/6 text-sm font-medium  text-opacity-50 text-darkGray-500 dark:text-darkGray"
            >
              Password
            </label>
            <input
              type="password"
              id="first_name"
              className="bg-faintGray-500 border  text-opacity-50 border-faintGray-500 text-textGray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-faintBlue-600 block w-full p-5 dark:bg-faint-700 dark:faintGray-500 dark:placeholder-textGray-500 mb-1 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-5/6"
              placeholder="Type Your Password here"
              value={password}
              onChange={(el) => {
                setPassword(el.target.value);
              }}
              required
            />
          </div>
        </div>
      </div>
      <div className="h-1/6 w-full flex items-center justify-around">
        <button
          onClick={submitHandler}
          className="bg-faintYellow-900 hover:bg-faintYellow-600 text-white font-bold py-2 px-4 h-1/3 w-5/6 shadow rounded-lg"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
