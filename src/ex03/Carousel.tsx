import React from "react";

import { PersonCard } from "../solution/PersonCard";

import {range} from '../utils';

// cycle through the people array when clicking the previous
// and the next buttons. Look in ../utils.js for some utility
// functions you may need.

type FabProps = {
  icon: string;
  onClick: any;
};

const Fab: React.FC<FabProps> = ({ icon, onClick }) => (
  <button className="mdc-fab mdc-fab--mini" onClick={onClick}>
    <i className="rmwc-icon material-icons mdc-fab__icon">{icon}</i>
  </button>
);

type CarouselProps = {
  people: People;
};

/*
export const CarouselOff: React.FC<CarouselProps> = ({ people }) => (
  <div className="flex-row">
    <Fab icon="skip_previous" />
    <div className="carousel">
      <PersonCard person={people[0]} className="current" />
    </div>
    <Fab icon="skip_next" />
  </div>
);
*/

// when you are done:
// replace the local Fab with the Fab component from RMWC
// @see https://jamesmfriedman.github.io/rmwc/fabs


export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      countPeople: this.props.people.length-1,
    }
  };
  skipNext = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.setState( { index: range(0,this.state.countPeople).succ(this.state.index) } );
  };
  skipPrevious = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.setState( { index: range(0,this.state.countPeople).pred(this.state.index) } );
  };
  render() {
    return (
      <div className="flex-row">
        <Fab icon="skip_previous" onClick={this.skipPrevious} />
        <div className="carousel">
          <PersonCard person={this.props.people[this.state.index]} className="current" />
        </div>
        <Fab icon="skip_next" onClick={this.skipNext} />
      </div>
    );
  }
}