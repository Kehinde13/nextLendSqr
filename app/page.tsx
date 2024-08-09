import Image from "next/image";
import LoginForm from "./ui/loginForm";
import logo from '../public/loginPage/Group (1).svg'
import signInHero from '../public/loginPage/SignIn.svg'

export default function Home() {
  return (
    <main className=" h-screen flex flex-col">
      <div className="flex flex-col md:flex-row gap-16 md:gap-36  ">
        <div className="flex flex-col gap-24 md:py-16 md:px-24 p-5 md:h-screen">
          <Image
           src={logo}
           alt="lendSqr logo"
           className="w-28 md:w-56"
          />
          <Image
           src={signInHero}
           alt="lendSqr logo"
           className="hidden md:block"
           />
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
