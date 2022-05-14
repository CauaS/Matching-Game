import React from "react";
import { Card } from "../card/types";

function checkIfCardAlreadyClicked(
  card: Card,
  selectedCards: React.MutableRefObject<Array<Card>>
): boolean {
  return (
    selectedCards.current.length !== 0 &&
    selectedCards.current.every((selectedCard) => selectedCard.id === card.id)
  );
}

function checkIfCardsMatch(
  selectedCardValue: number,
  selectedCards: React.MutableRefObject<Array<Card>>
): boolean {
  return selectedCards.current.every(
    (card) => card.value === selectedCardValue
  );
}

function hasSelectedCardsMoreThenOneCard(
  selectedCards: React.MutableRefObject<Array<Card>>
): boolean {
  return selectedCards.current.length !== 1;
}

export {
  checkIfCardAlreadyClicked,
  checkIfCardsMatch,
  hasSelectedCardsMoreThenOneCard
};
