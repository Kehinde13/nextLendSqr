"use client";

import React, { useState } from "react";
import { Input } from "./shadcn/input";
import { Button } from "./shadcn/button";
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('dashboard')
  }

  return (
    <div className="px-10 md:px-0 md:mt-48 md:w-[50%]">
      <div>
        <h1 className="text-3xl md:text-4xl text-blue-600 font-bold mb-5">
          Welcome !
        </h1>
        <p>Enter details to login</p>
      </div>

      <form onSubmit={signIn} className="mt-5 flex flex-col gap-5 relative md:w-[70%]">
      
      <Input type="email" placeholder="Email" />

      <Input type={showPassword ? "text" : "password"} placeholder="Password" />
        <p
          className="text-blue-500 absolute text-sm top-[68px] right-5 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </p>

        <p className="text-blue-600">Forgot Password?</p>

        <Button  
          className="btn border-none text-white  bg-blue-600">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
