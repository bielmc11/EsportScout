import { roboto } from "@/app/layout";
import React from "react";
const players = ["Global", "Myrwin", "Elyoya", "Jojo", "Alvaro", "Supa"];

export const Sidebar = () => {
  return (
    <div className="h-screen fixed bg-mainBlue px-4 min-w-1/6 justify-center">
      <header className="text-center">
        <img src="./logo2.png" className="w-40 h-40 mx-auto" alt="logo" />
      </header>

      <main className="flex flex-col gap-4  text-center mt-20 font bold">
        {players.map((players, index) => {
          return (
            <div
              key={index}
              className={`${roboto.className} font-bold text-xl flex justify-center items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                <path d="M12 3v18" />
              </svg>
              <p>{players}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};
