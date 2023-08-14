import Image from "next/image";
import { useEffect } from "react";
async function getData() {
  const res = await fetch("http://localhost:3000/getuser", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log("yes", data);

  return (
    <main>
      <div>
        {data.map((item: any) => (
          <>
            <p>name : {item.name}</p>
            <p>password: {item.password}</p>
          </>
        ))}
      </div>
    </main>
  );
}
