import LoginComp from "./LoginComp";
export interface loginInfo {
  username: string;
  password: string;
}
const loginApi = async (userInfo: loginInfo) => {
  "use server";

  const res = await fetch(`https://${process.env.VERCEL_URL}/api/login`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({ ...userInfo, name: userInfo.username }),
  });

  if (res.status !== 200) {
    return res.json();
  }

  return res.status === 200 && res.json();
};

const hello = async () => {
  return (
    <div className="h-screen flex gap-3 items-center justify-center">
      <LoginComp loginApi={loginApi} />{" "}
    </div>
  );
};
export default hello;
