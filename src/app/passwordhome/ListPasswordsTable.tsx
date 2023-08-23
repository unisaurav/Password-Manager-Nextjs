"use client";
import { useEffect, useState } from "react";

interface passwordListType {
  username: string;
  webUrl: string;
  webpassword: string;
}
interface passwordListTypeWithToggle {
  username: string;
  webUrl: string;
  webpassword: string;
  show: boolean;
}

const ListPassword = ({
  passwordList,
}: {
  passwordList: passwordListType[];
}) => {
  const [tablePasswords, setTablePassword] = useState<
    passwordListTypeWithToggle[]
  >([]);

  useEffect(() => {
    const addToggle = passwordList.map((item) => ({ ...item, show: false }));
    setTablePassword([...addToggle]);
  }, [passwordList]);

  const showHidePassWord = (id: any) => {
    const data = tablePasswords;
    data[id].show = !data[id].show;
    setTablePassword([...data]);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Website Url
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tablePasswords.map((item: passwordListTypeWithToggle, key) => {
            return (
              <tr
                className="bg-white border-b"
                key={item.username + item.webUrl + item.webpassword+key}
              >
                <td className="px-6 py-4">{item.username}</td>
                <td className="px-6 py-4">{item.webUrl}</td>
                <td className="px-6 py-4">
                  {item.show
                    ? item.webpassword
                    : "*".repeat(item.webpassword.length)}
                </td>
                <td className="px-6 py-4">
                    <button>
                  <td className="text-blue-500"
                    onClick={() => showHidePassWord(key)}
                  >
                    {item.show ? "HIDE" : "SHOW"}
                  </td></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassword;
