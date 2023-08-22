// name
// password

import SignUpScreen from "./SignupComp";
interface userinfo {
  name: String;
  password: String;
}

const SignUpApi = async (newUserDetails: userinfo) => {
  "use server";
  const res = await fetch("http://localhost:3000/api/signup", {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({ ...newUserDetails }),
  });
  const data = { status: res.status, response: await res.json() };
  return data;
};

const Signup = () => {
  return <SignUpScreen SignUpApi={SignUpApi} />;
};
export default Signup;