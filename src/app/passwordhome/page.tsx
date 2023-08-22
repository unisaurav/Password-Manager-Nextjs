import PasswordScreen from "./passwordhome";

const PasswordContainer = () => {
  const getAllMyPasswords = async (id: any) => {
    "use server";
    const res = await fetch(`http://localhost:3000/api/passwordlist/${id}`, {
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

    const res = await fetch("http://localhost:3000/api/addpassword", {
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
      <PasswordScreen {...props} />
    </div>
  );
};
export default PasswordContainer;
