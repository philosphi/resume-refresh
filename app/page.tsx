import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {

  const { userId } = auth();
  const href = userId ? "/resume" : "/new-user";

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="max-w-[800px] mx-auto w-full">
        <h1 className="text-6xl mb-4">Turn over a new leaf with Resume Refresh</h1>
        <p className="text-2xl text-white/60 mb-4">Our intuitive AI helps you craft a resume that grows with your career aspirations.</p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 rounded-lg px-4 py-2 text-xl">get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
