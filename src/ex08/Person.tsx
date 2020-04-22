import React from "react";
import { PersonCard } from "../solution/PersonCard";
import { usePerson } from "./PeopleContext";
import { RouteComponentProps } from "react-router-dom";

export const ConnectedPerson: React.FC<RouteComponentProps<{id: string}>> = ({ match: { params: { id: personId }} }) => {
  const person = usePerson(personId);
  return <Person person={person} />;
};

export const Person: React.FC<{ person: any }> = ({ person }) => {
  return (
    <main>
      {person ? <PersonCard person={person} /> : `404 - no person with this id`}
    </main>
  );
};
