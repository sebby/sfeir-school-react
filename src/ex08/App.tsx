import React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";

import { SearchableList } from "./SearchableList";
import { Player } from "./Player";
import { Person } from "./Person";
import { PeopleProvider } from "./PeopleContext";

export const App: React.FC = () => {
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>

      <PeopleProvider>
        <Switch>
          <Route path="/list" component={SearchableList} />
          <Route path="/player" component={Player} />
          <Route path="/person/:id" component={Person} />
          <Redirect to="/list" />
        </Switch>
      </PeopleProvider>
    </>
  );
};
