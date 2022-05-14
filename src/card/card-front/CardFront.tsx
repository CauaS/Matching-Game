import React from "react";
import { Card } from "../types";
import "./styles.css";

function CardFront(card: Card) {
  return (
    <div
      className={card.isMatched ? "" : "pulse"}
      style={{ cursor: "not-allowed" }}
    >
      <img
        src={card.front}
        style={{
          width: 100,
          height: 150
        }}
        alt="front-card"
      />
    </div>
  );
}

export default React.memo(CardFront);
