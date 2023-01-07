import React from "react";
import RegisterButton from "../../components/buttons/RegisterButton";

const RegisterPage = () => {
  return (
    <>
      <div className="h-5/6">
        <div className="h-2/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p className="text-sm">Create Account</p>
          <p className="text-3xl">Lets Get to aiosd</p>
          <p className="text-3xl">Lets Get to aiosd</p>
        </div>
        <div className="h-5/6">
          <div className="flex flex-col items-center justify-around w-full">
            <label
              for="first_name"
              class="block w-5/6 text-sm font-medium text-darkGray-500  text-opacity-50 dark:text-darkGray"
            >
              asd
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-faintGray-500 border border-faintGray-500 text-opacity-50 text-textGray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-faintBlue-600 block w-full p-5 dark:bg-faint-700 dark:faintGray-500 dark:placeholder-textGray-500 dark:text-white mb-1 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-5/6"
              placeholder="Type Your Name here"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-around w-full">
            <label
              for="first_name"
              class="block w-5/6 text-sm font-medium  text-opacity-50 text-darkGray-500 dark:text-darkGray"
            >
              asd
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-faintGray-500 border  text-opacity-50 border-faintGray-500 text-textGray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-faintBlue-600 block w-full p-5 dark:bg-faint-700 dark:faintGray-500 dark:placeholder-textGray-500 dark:text-white mb-1 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-5/6"
              placeholder="Type Your Name here"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-around w-full">
            <label
              for="first_name"
              class="block w-5/6 text-sm font-medium  text-opacity-50 text-darkGray-900 dark:text-darkGray-900"
            >
              asd
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-faintGray-500 border  text-opacity-50 border-faintGray-500 text-textGray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-faintBlue-600 block w-full p-5 dark:bg-faint-700 dark:faintGray-500 dark:placeholder-textGray-500 dark:text-white mb-1 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-5/6"
              placeholder="Type Your Name here"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-around w-full">
            <label
              for="first_name"
              class="block w-5/6 text-sm font-medium  text-opacity-50 text-darkGray-500 dark:text-darkGray"
            >
              asd
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-faintGray-500 border  text-opacity-50 border-faintGray-500 text-textGray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-faintBlue-600 block w-full p-5 dark:bg-faint-700 dark:faintGray-500 dark:placeholder-textGray-500 dark:text-white mb-1 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-5/6"
              placeholder="Type Your Name here"
              required
            />
          </div>
        </div>
      </div>
      <div className="h-1/6 w-full flex items-center justify-around">
        <RegisterButton />
      </div>
    </>
  );
};

export default RegisterPage;
