import { Input } from "./input";
import { useState } from "react";
import Link from "next/link";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-screen  w-full bg-[url('/images/netflix.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className=" bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12"></img>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {"Register"}
            </h2>
            <div className="flex flex-col gap-4">
              <Input
                id={"name"}
                onChange={(e: any) => setName(e.target.value)}
                value={name}
                label={"Username"}
              />
              <Input
                id={"email"}
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
                label={"Email"}
                type="email"
              />
              <Input
                id={"password"}
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
                label={"Password"}
                type="password"
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {"Sign up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {"Already have an account? "}
              <Link
                className="text-white hover:underline cursor-pointer"
                href="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
