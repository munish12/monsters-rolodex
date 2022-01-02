import React from "react";

import { CardComponent } from "./card/CardComponent";

export const CardList = (props) => {
  return (
    <>
      {props.monsters.map((monster) => (
        <CardComponent key={monster.id} monster={monster} />
      ))}
    </>
  );
};
