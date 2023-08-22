"use client";
import Image from "next/image";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

export default async function Home() {
  const username = secureLocalStorage.getItem("userKey") as string;
  return (
    <main>
      <div>/</div>
    </main>
  );
}
