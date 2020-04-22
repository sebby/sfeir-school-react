

// define Card as a React component
// return the elements as in Card.html
// pass it a title prop

import React from "react";

type CardProps = {
  title: string;
};

export const Card: React.FC<CardProps> = props => {
  const divStyle = { padding: '1rem' };

  return (
    <section className="mdc-card" style={{ width: 480 }}>
      <div style={divStyle}>
        <h1 className="mdc-typography--headline4">
          {props.title}
        </h1>
      </div>
    </section>
  );
};

export const test = "test message";

export default () => {
  return (
    <div>{test}</div>
  );
};
