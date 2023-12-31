"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

export default  function Home() {
  const username = secureLocalStorage.getItem("userKey") as string;
  const router = useRouter();
  useEffect(()=>{
    console.log(process.env.VERCEL_URL);
  })
  return (
    <main>
      <div className="h-screen flex gap-3 items-center justify-center">
        <button
          className="btn"
          onClick={() => {
            router.push("/Login");
          }}
        >
          Loginsss
        </button>{" "}
        <button
          className="btn"
          onClick={() => {
            router.push("/Signup");
          }}
        >
          SignUp
        </button>
      </div>
    </main>
  );
}
