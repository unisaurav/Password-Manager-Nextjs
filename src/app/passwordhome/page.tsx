import { Suspense } from "react";
import PasswordScreen from "./passwordhome";

const PasswordContainer = () => {
  const getAllMyPasswords = async (id: any) => {
    "use server";
    const res = await fetch(`https://${process.env.VERCEL_URL}/api/passwordlist/${id}`, {
      cache: "no-store",
      method: "GET",
    });
    const data = await res.json();
    return { list: data, status: res.status };
  };

  const addMyPassowrds = async (userPassObj: any, id: string) => {
    "use server";
    const userObjMapper = {
      username: userPassObj.username,
      webpassword: userPassObj.passWord,
      webUrl: userPassObj.webUrl,
      userId: id,
    };

    const res = await fetch(`https://${process.env.VERCEL_URL}/api/addpassword`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(userObjMapper),
    });

    const data = await res.json();
    return { ...data, status: res.status };
  };

  const props = {
    addMyPassowrds,
    getAllMyPasswords,
  };

  return (
    <div>
      <Suspense fallback={<div>loading....</div>}>
        <PasswordScreen {...props} />
      </Suspense>
    </div>
  );
};
export default PasswordContainer;
