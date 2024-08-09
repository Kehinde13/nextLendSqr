"use client"

import { Button } from "./button";
import { Input } from "./input";

type Prop = {
   setUser: ( user: string) => void;
   fetchUser: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export function InputWithButton({setUser, fetchUser} : Prop) {
  

  return (
    <form 
      onSubmit={fetchUser}
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
