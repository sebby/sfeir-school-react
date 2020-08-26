import React, { useState, cloneElement, useEffect } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";

type CarouselProps = {
  children: React.ReactElement[];
  currentIndex: number;
  setCurrentIndex: Function;
};

const Carousel: React.FC<CarouselProps> = ({ currentIndex, setCurrentIndex, children }) => {
  const childArray = React.Children.toArray(children) as React.ReactElement[];
  const { pred, succ } = range(0, childArray.length - 1);

  const cards: [number, string][] = [
    [succ(currentIndex), "next"],
    [currentIndex, "current"],
    [pred(currentIndex), "prev"]
  ];

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={() => setCurrentIndex(pred)} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={() => setCurrentIndex(succ)} />
    </div>
  );
};

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(true);
  const { pred, succ } = range(0, people.length - 1);

  useEffect(() => {
    let timeoutId;
    if (isPlaying) {
      timeoutId = setTimeout(() => {
        console.log('timeout');
        setCurrentIndex(succ(currentIndex));
      }, 1000);
      return () => {
        console.log('clearTimeout');
        clearTimeout(timeoutId)
      };
    }
  },
    [currentIndex]);

  const onPlay = (e) => {
    e.preventDefault();
    setPlaying(!isPlaying);
    setCurrentIndex(succ(currentIndex));
  };


  return (
    <>
      <main>
        <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
          {people.map(person => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        <Fab icon={isPlaying ? "pause" : "play_arrow"} onClick={onPlay} />
        {/* show the pause icon when playing */}
      </footer>
    </>
  );
};
