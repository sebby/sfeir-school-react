import React, { useState, useEffect } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { SearchableList } from "../solution/SearchableList";
import { loadPeople } from "../utils";

import { Player } from "./Player";
// import { Player } from "../solution/Player";

export const App: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [people, setDatasPeople] = useState([]);
  const toggleView = () => setShowList(x => !x);
  const toggleIcon = showList ? "view_carousel" : "view_module";

  useEffect(() => {
      loadPeople().then(data => {
        console.log('Recup. des données json');
        console.log(data);
        setDatasPeople(data);
      })
    },[]);

  useEffect(() => {
     console.log('Update sur le array people');
     console.log(people);
    },
    [people]);
  

  const CurrentView: React.ComponentType<{ people: People }> =
    people.length === 0 ? Loading : showList ? SearchableList : Player;

  return (
    <>
      <Header>
        <TopAppBarActionItem icon={toggleIcon} onClick={toggleView} />
      </Header>
      <CurrentView people={people} />
  
    </>
  );
};
