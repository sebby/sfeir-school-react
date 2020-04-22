import React, { useState, ReactElement } from "react";
import { Fab } from "@rmwc/fab";

import { range } from "../utils";

type CarouselProps = {
  children: React.ReactElement[];
};

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [index, setIndex] = useState(0);
  const { succ, pred } = range(0, children.length-1);

  const previous = React.cloneElement(children[pred(index)], { className: 'prev' });
  const current = React.cloneElement(children[index], { className: 'current' });
  const next = React.cloneElement(children[succ(index)], { className: 'next' });

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={() => setIndex(pred(index))} />
      <div className="carousel">
        {previous}
        {current}
        {next}
      </div>
      <Fab icon="skip_next" mini onClick={() => setIndex(pred(index))} />
    </div>
  );
};
