import React, { useState } from "react";
import { TextField } from "@rmwc/textfield";

import { PersonCard } from "../solution/PersonCard";

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
  const [search, setSearch] = useState("");

  const onSearchChange = event => {
    setSearch(event.target.value);
  };

  const onClearIconClick = () => {
    setSearch("");
  };

  const filterPeople = person => {
    return person.firstname.toUpperCase().includes(search.toUpperCase()) || 
      person.lastname.toUpperCase().includes(search.toUpperCase());
  };

  return (
    <>
      <main>{people.filter(filterPeople).map(toPersonCard)}</main>
      <footer>
        <TextField
          icon="search"
          trailingIcon={{ 
            icon: "close",
            onClick: onClearIconClick
          }}
          label="search by name"
          value={search}
          onChange={onSearchChange}
        />
      </footer>
    </>
  );
};
