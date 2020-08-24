import React from "react";
import { Card, CardImage, CardHeader, CardInfo } from "./Card";

type PersonCardProps = {
  person:Person
};

export const PersonCard: React.FC<PersonCardProps> = (props) => (
  <Card>
    <CardImage
      url={props.person.photo}
      desc={props.person.manager}
    />
    <CardHeader
      title={<a href={`/person/${props.person.id}`}>{props.person.firstname} {props.person.lastname}</a>}
      subTitle={props.person.position}
    />

    <CardInfo icon="email">
      <a href={"mailto:"+props.person.email}>{props.person.email}</a>
    </CardInfo>
    <CardInfo icon="phone">
      <a href={"tel:"+props.person.phone}>{props.person.phone}</a>
    </CardInfo>
    <CardInfo icon="supervisor_account" desc={props.person.manager}>
      <a href={`/person/${props.person.id}`}>{props.person.firstname} </a>
    </CardInfo>
  </Card>
);
