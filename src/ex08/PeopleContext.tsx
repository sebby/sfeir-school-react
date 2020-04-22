import React, { useState, useEffect, useContext } from "react";
import { loadPeople } from "../utils";
import { Loading } from "../solution/Loading";

export const PeopleContext = React.createContext<People>([]);

export const PeopleProvider: React.FC = ({ children }) => {
    const [people, setPeople] = useState<People>([]);

    useEffect(() => {
      loadPeople().then(setPeople);
    }, []);

    return <PeopleContext.Provider value={people}>
        { 
            people.length === 0 ? (
                <Loading />
            ) : children
        }   
    </PeopleContext.Provider>;
};

export const usePerson = (personId: string) => {
    const people = useContext(PeopleContext);
    const person = people.find(person => person.id === personId);
    return person;
}
