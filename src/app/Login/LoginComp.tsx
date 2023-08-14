"use client";
import { useState } from "react";
import { loginInfo } from "./page";
import { useRouter } from "next/navigation";

const LoginComp = ({ loginApi }: any) => {
  const router = useRouter();

  const [user, changeUser] = useState<loginInfo>({
    username: "",
    password: "",
  });

  const mynewfun = async (user: any) => {
    const data = await loginApi(user);
    data && router.push("/");
  };

  return (
    <div className="flex flex-col gap-3 w-72 p-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="input"
          placeholder="Jakepaul"
          required
          onChange={(e) => changeUser({ ...user, username: e.target.value })}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="password"
          required
          onChange={(e) => changeUser({ ...user, password: e.target.value })}
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          mynewfun(user);
        }}
      >
        Login{" "}
      </button>
    </div>
  );
};
export default LoginComp;
