import React, {useState, SyntheticEvent} from "react";
import { TextField } from "@rmwc/textfield";

import { PersonCard } from "../solution/PersonCard";
import { PeopleProvider } from "../ex08/PeopleContext";

// hint: to check if a string contains some substring,
// create a case insensitive regular expression
const containsSubstring = (str: string, sub: string): boolean => {
  const re = new RegExp(sub, "i");
  return re.test(str);
};

const toPersonCard = (person: Person) => (
  <PersonCard person={person} key={person.id} />
);

type SearchableListProps = {
  people: People;
};

export const SearchableList: React.FC<SearchableListProps> = ({ people }) => {
  const [azerty, setSearch] = useState("");

  const onChangeTextField = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
    //let toto = people.filter(person => person.firstname === azerty);
  };

  const toto = people.filter(person => person.firstname.toLowerCase().includes(azerty));
  const list =  toto.map(toPersonCard);

  return (
    <>
      <main>{list}</main>
      <footer>
        <TextField
          icon="search"
          trailingIcon={{ icon: "close" }}
          label="search by name"
          value={azerty}
          onChange = {onChangeTextField}
        />
      </footer>
    </>
  );
};
