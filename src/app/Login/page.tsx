import LoginComp from "./LoginComp";
export interface loginInfo {
  username: string;
  password: string;
}
const loginApi = async (userInfo: loginInfo) => {
  "use server";
  const res = await fetch("http://localhost:3000/api/login", {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({ ...userInfo, name: userInfo.username }),
  });

  if (res.status !== 200) {
    return false;
  }

  return res.status === 200 && res.json();
};

const hello = async () => {
  return <LoginComp loginApi={loginApi} />;
};
export default hello;
