import React from "react";
import { Card } from "../types";

function CardBack(card: Card) {
  return (
    <img src={card.back} style={{ width: 100, height: 150 }} alt="back-card" />
  );
}
export default React.memo(CardBack);
