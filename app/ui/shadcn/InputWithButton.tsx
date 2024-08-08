"use client";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import prisma from "@/app/lib/db";
import { Customer } from "@/app/lib/definitions";

type Prop = {
   setCustomer: ( customerObj :Customer | null) => void;
}

export function InputWithButton({setCustomer} : Prop) {
  const [user, setUser] = useState("");


  const searchData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await prisma.customers.findUnique({
      where: {
        username: user
      },
    });
    if(result === undefined){
      alert("user not found")
    }
    setCustomer(result)
  };

  return (
    <form 
      onSubmit={searchData}
      className="flex w-full max-w-sm items-center m-5 md:m-0">
      <Input
        type="text"
        placeholder="Search for user..."
        className="w-[70%] active:border-0"
        onChange={(e) => setUser(e.target.value)}
      />
      <Button
        type="submit"
        className="bg-[#39CDCC] w-[20%] rounded-l-none ml-[-15px]"
      >
        Search
      </Button>
    </form>
  );
}
