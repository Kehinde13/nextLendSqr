"use client";

import React, { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="px-10 md:px-0 md:mt-48 md:w-[50%]">
      <div>
        <h1 className="text-3xl md:text-4xl text-blue-600 font-bold mb-5">
          Welcome !
        </h1>
        <p>Enter details to login</p>
      </div>

      <form action="" className="mt-5 flex flex-col gap-5 relative">
        <label className="input bg-white border border-gray-300 md:w-[70%] flex items-center gap-2">
          <input type="text" className="grow" placeholder="Email" />
        </label>

        <label className="input bg-white border border-gray-300 md:w-[70%] flex items-center gap-2">
          <input
            type={showPassword ? "text" : "password"}
            className="grow"
            placeholder="password"
          />
        </label>

        <p
          className="text-blue-500 absolute text-sm top-20 right-5 md:right-52 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </p>

        <p className="text-blue-600">Forgot Password?</p>

        <button className="btn border-none text-white md:w-[70%] bg-blue-600">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
