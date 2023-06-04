"use client"; // Because useState is client Side.
import { useState } from "react";

export default function Home() {
  const [isTrue, setIsTrue] = useState(false);
  const Admin = () => {
    return <main>{"I'm Admin"}</main>;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Who is Logged In ?</h1>
      <button onClick={() => setIsTrue(!isTrue)}>Switch User</button>
      {!isTrue ? <User /> : <Admin />}
    </main>
  );
}

const User = () => {
  return (
    <main>
      <h1>{"I'm User"}</h1>
    </main>
  );
};
