import React from "react";

import { Header } from "../solution/Header";

import { PersonCard } from "./PersonCard";
// import { PersonCard } from "../solution/PersonCard";

type AppProps = {
  people: People;
};

export const App: React.FC<AppProps> = ({ people }) => {
  const randomPerson = people[Math.floor(Math.random() * people.length)];

  return (
    <>
      <Header />
      <main>
        <PersonCard person={randomPerson} />
      </main>
    </>
  );
};
