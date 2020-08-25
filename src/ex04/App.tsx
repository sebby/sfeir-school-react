import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { PersonCard } from "../solution/PersonCard";

import { Carousel } from "./Carousel";

type AppProps = {
  people: People;
};

export const App: React.FC<AppProps> = ({ people }) => {

  const [currentView, updateToto] = useState('view_carousel');

  const switchView =  () => {
    if(currentView === 'view_carousel'){
      updateToto('view_module');
    }
    else{
      updateToto("view_carousel");
    }
    
  }
  const list = people.map(person=>(
    <PersonCard person={person} key={person.id}/>
  ));

  return (
    <>
      <Header>
      <TopAppBarActionItem icon="view_carousel" onClick={switchView}/>
      <TopAppBarActionItem icon="view_module" onClick={switchView}/>
        {/* use "view_module" as icon for showing the list */}
      </Header>
      <main>
        {
          currentView === 'view_module'?list:<Carousel people={people}/> 
        }
      </main>
    </>
  );
};
