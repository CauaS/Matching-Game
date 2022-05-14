import { Card } from "../card/types";
import { checkIfCardAlreadyClicked } from "../validations";

function resetSelectedCards(
  selectedCards: React.MutableRefObject<Array<Card>>
) {
  selectedCards.current = [];
}

function increaseScore(score: React.MutableRefObject<number>) {
  score.current += 1;
}

function addSeletectCardToArray(
  card: Card,
  selectedCards: React.MutableRefObject<Array<Card>>
) {
  if (!checkIfCardAlreadyClicked(card, selectedCards)) {
    selectedCards.current.push(card);
  }
}

export {
  resetSelectedCards,
  increaseScore,
  addSeletectCardToArray
};
