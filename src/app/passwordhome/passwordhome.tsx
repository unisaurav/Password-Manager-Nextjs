"use client";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import ListPassword from "./ListPasswordsTable";

const PasswordScreen = ({ addMyPassowrds, getAllMyPasswords }: any) => {
  const router = useRouter();
  const [addUserDetials, setUserDetials] = useState({
    username: "",
    webUrl: "",
    passWord: "",
  });
  const [basicToast, setToast] = useState<any>(null);
  const [passwordList, setPasswordList] = useState<any>([]);
  const userKey = secureLocalStorage.getItem("userKey") as string;
  const fetchData = async () => {
    const initPasswordList = await getAllMyPasswords(userKey);
    if (initPasswordList.status === 200) {
      setPasswordList([...initPasswordList.list]);
    } else if (initPasswordList.status === 201) {
      setToast({ text: initPasswordList.list.info, color: "text-green-400" });
    } else {
      setToast({ text: "Something gone wrong", color: "text-red-500" });
    }
  };

  useEffect(() => {
    !userKey && router.push("/Login");
    if (userKey) {
      fetchData();
    }
  }, []);

  const saveNewIdPass = async () => {
    const userKey = secureLocalStorage.getItem("userKey") as string;
    const mynewData = await addMyPassowrds(addUserDetials, userKey);
    if (mynewData.status === 200) {
      setToast({ text: "Password Added", color: "text-green-700" });
      setUserDetials({
        username: "",
        webUrl: "",
        passWord: "",
      });
      setTimeout(() => {
        setToast("");
      }, 2000);
      fetchData();
    } else {
      setToast({ text: "Something gone wrong", color: "text-red-500" });
      setTimeout(() => {
        setToast("");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-row p-4 space-x-4 ">
      <div className="flex-1 flex-col gap-3 w-1/2 space-y-2">
        {basicToast && (
          <div>
            <label
              className={`block mb-2 text-sm font-medium ${basicToast.color}`}
            >
              {basicToast.text}
            </label>
          </div>
        )}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            WebUrl
          </label>
          <input
            type="url"
            id="url"
            className="input"
            placeholder="www.gmail.com"
            value={addUserDetials.webUrl}
            required
            onChange={(e) => {
              setUserDetials({ ...addUserDetials, webUrl: e.target.value });
            }}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Username
          </label>
          <input
            type="username"
            id="username"
            className="input"
            placeholder="username"
            value={addUserDetials.username}
            required
            onChange={(e) => {
              setUserDetials({ ...addUserDetials, username: e.target.value });
            }}
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
            value={addUserDetials.passWord}
            required
            onChange={(e) => {
              setUserDetials({ ...addUserDetials, passWord: e.target.value });
            }}
          />
        </div>
        <button className="btn" onClick={() => saveNewIdPass()}>
          AddMyPassword
        </button>
      </div>
      <div className="flex-1 flex-col gap-3 w-1/2">
        <Suspense fallback={<div>loading....</div>}>
          <ListPassword passwordList={passwordList} />
        </Suspense>
      </div>
    </div>
  );
};
export default PasswordScreen;
