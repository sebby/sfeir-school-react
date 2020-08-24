import React from 'react';

// define Card as a React component
// return the elements as in Card.html
// pass it a title prop

type CardProps = {
  title: string;
};
type Toto = {
  message: string;
};

// export const Card : React.FunctionComponent<Toto> = (props) => {
export const Card  = (props) => {
  return (
    <section className="mdc-card" style={{width: '480px'}}>
    <div style={{padding: '1rem'}}>
      <h1 className="mdc-typography--headline4">
        {props.message}
      </h1>
    </div>
  </section>
  
  );

};
