"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "./style.css"

export default function Home() {
  const router = useRouter()
  return (
    <>
      <p className="my">hello</p>
      <Link href="/blog">
        <button>Blog</button>
      </Link>
      <p >hello my name is subham</p>
      <button onClick={() => router.push("/blog")}>Blog use Router</button>
    </>
  );
}
