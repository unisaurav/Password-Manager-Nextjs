"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SingUpPropType {
  (SignUpApi: string): Promise<boolean>;
}

interface newUserType {
  newUserName: String;
  newPassword: String;
  newConfirmPassword: String;
}

const SignUpScreen = ({ SignUpApi }: any) => {
  const router = useRouter();

  const [newUser, setNewUser] = useState<newUserType>({
    newUserName: "",
    newPassword: "",
    newConfirmPassword: "",
  });
  const [validateError, setValidateError] = useState<string[]>([]);

  const validateUser = async () => {
    const { newUserName, newPassword, newConfirmPassword } = newUser;
    const err = [];
    if (
      !newUserName.trim() ||
      !newPassword.trim() ||
      !newConfirmPassword.trim()
    ) {
      err.push("Please Enter All Details.");
    } else if (newPassword !== newConfirmPassword) {
      err.push("Password does not match.");
    } else if (newPassword.trim().length < 8) {
      err.push("Password length should be grater than 8 char.");
    }

    if (err.length === 0) {
      const data = await SignUpApi({
        name: newUserName,
        password: newPassword,
      });
      if (data.status === 200) {
        data && router.push("/Login");
      }
      if (data.status === 400) {
        err.push(data.response.message);
      }
    }
    setValidateError([...err]);
  };

  return (
    <div className="flex flex-col gap-3 w-72 p-4">
      <div>
        {validateError.map((item, key) => (
          <label
            key={key}
            className="block mb-2 text-xs font-medium text-red-900 "
          >  
            {item}
          </label>
        ))}
      </div>
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
          onChange={(e) =>
            setNewUser({ ...newUser, newUserName: e.target.value })
          }
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
          onChange={(e) =>
            setNewUser({ ...newUser, newPassword: e.target.value })
          }
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Password
        </label>
        <input
          type="password"
          id="confimpassword"
          className="input"
          placeholder="Confirm Password"
          required
          onChange={(e) =>
            setNewUser({ ...newUser, newConfirmPassword: e.target.value })
          }
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          validateUser();
        }}
      >
        Login{" "}
      </button>
      <button
        className="btn"
        onClick={() => {
          router.push('/Login')
        }}
      >
        Dont have an account?!
      </button>
    </div>
  );
};
export default SignUpScreen;
