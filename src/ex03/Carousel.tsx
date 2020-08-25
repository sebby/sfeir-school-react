import React, { useState } from 'react';
import { PersonCard } from "../solution/PersonCard";
import { range } from '../utils';



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


type CarouselState = {
  index: number,
  countPeople:number,
}

export const Carousel = (props) => {
  const countPeople = props.people.length-1;
  
  const [index, fctPrev] = useState(0);
  const [people, fctPickPeople] = useState(props.people);

  
  const skipPrevious = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let current = (range(0,countPeople).pred(index));
    fctPrev(current);
    console.log(countPeople);
    console.log(people);
    console.log(index);
  };
  const skipNext = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" onClick={skipPrevious} />
      <div className="carousel">
        <PersonCard person={people} className="current" />
      </div>
      <Fab icon="skip_next" onClick={skipNext} />
    </div>
  );
}

/*
export class Carousel extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      index: 0,
      countPeople: this.props.people.length-1
    }
  };
  skipNext = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let index = range(0,this.state.countPeople).succ(this.state.index);
    this.setState( { index: index } );
  };
  skipPrevious = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let index = range(0,this.state.countPeople).pred(this.state.index);
    this.setState( { index: index } );
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
*/