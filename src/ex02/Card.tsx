import React from "react";

export const Card: React.FC = ({ children }) => (
  <section className="mdc-card">
    <div className="card-content content-type-person-info">{children}</div>
  </section>
);

// implement these subcomponents
type CardImageInfo = {
    url: string;
    desc: string;
}
export const CardImage: React.FC<CardImageInfo> = (props) => {
  return (
    <figure>
    <img
      src= {props.url}
      alt= {props.desc}
    />
   </figure>
  );

};

export const CardHeader: React.FC<{
  title: React.ReactNode;
  subTitle: React.ReactNode;
}> = (props) => {
  return (
    <header>
        <h1 className="mdc-typography--headline5">
        {props.title}
        </h1>
        <h2 className="mdc-typography--subtitle1">{props.subTitle}</h2>
      </header>

  );
};

export const CardInfo: React.FC<{
  icon: string;
  desc?: string;
  children: React.ReactNode;
}> = (props) => {
  return (
<p>
        <i
          className="rmwc-icon material-icons rmwc-icon--size-small"
          title={props.icon}
        >
          {props.icon}
        </i>
        &nbsp;
        {props.children}
      </p>

  );


};
