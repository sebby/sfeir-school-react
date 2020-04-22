import React, { useState, cloneElement, useEffect } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";

type CarouselProps = {
  currentIndex: number;
  showNext: () => void;
  showPrevious: () => void;
  children: React.ReactElement[];
};

const Carousel: React.FC<CarouselProps> = ({ children, showNext, showPrevious, currentIndex }) => {
  const childArray = React.Children.toArray(children) as React.ReactElement[];
  const { pred, succ } = range(0, childArray.length - 1);

  const cards: [number, string][] = [
    [succ(currentIndex), "next"],
    [currentIndex, "current"],
    [pred(currentIndex), "prev"]
  ];

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={showPrevious} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={showNext} />
    </div>
  );
};

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { pred, succ } = range(0, people.length - 1);

  const showNext = () => setCurrentIndex(succ);
  const showPrevious = () => setCurrentIndex(pred);
  const onPlayClick = () => setIsPlaying(true);
  const onPauseClick = () => setIsPlaying(false);

  useEffect(() => {
    let timeoutId;

    if (isPlaying) {
      timeoutId = setTimeout(() => {
          showNext();
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex, isPlaying])

  // const timeoutId = setTimeout(() => { /* do stuff */}, 2000);
  // clearTimeout(timeoutId);

  return (
    <>
      <main>
        <Carousel currentIndex={currentIndex} showNext={showNext} showPrevious={showPrevious}>
          {people.map(person => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        {
          isPlaying ? (
            <Fab icon="pause" onClick={onPauseClick} />
          ) : (
            <Fab icon="play_arrow" onClick={onPlayClick} />
          )
        }
      </footer>
    </>
  );
};
