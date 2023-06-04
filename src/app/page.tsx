"use client"; // Because useState is client Side.
import { useState } from "react";

export default function Home() {
  const [isTrue, setIsTrue] = useState(false);
  const Admin = () => {
    return <main>{"I'm Admin"}</main>;
  };

  const callMe = () => {
    const DisplayMsg = () => {
      return (
        <main>
          <h1>Components Called as a Function 😁 </h1>
        </main>
      );
    };
    return <DisplayMsg />;
  };

  const SayHello = () => {
    return <h1>Hey Anish!</h1>;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Who is Logged In ?</h1>
      <button onClick={() => setIsTrue(!isTrue)}>Switch User</button>
      {!isTrue ? <User /> : <Admin />}
      {isTrue ? callMe() : " "}
      {callMe()}

      <SayHello />
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
