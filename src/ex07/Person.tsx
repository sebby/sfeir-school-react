import React from "react";
import { PersonCard } from "../solution/PersonCard";

export const Person: React.FC<{person: any}> = ({ person }) => {
    return (
        <main>
            {
                !person ? "not found" : <PersonCard person={person} />
            }
        </main>
    );
};
