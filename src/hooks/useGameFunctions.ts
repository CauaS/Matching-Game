import { Card } from "../card/types";

export function useGameFunctions() {
  function createNewGameStateWhenCardsMatch(
    selectedCardValue: number,
    value: boolean,
    game: Card[]
  ): Card[] {
    return game.map((card) => {
      if (card.value === selectedCardValue) {
        return { ...card, isFrontSideVisible: value, isMatched: value };
      } else {
        return { ...card };
      }
    });
  }

  function showCardBackSideWhenNotMatch(value: boolean, game: Card[]): Card[] {
    return game.map((card) => {
      if (card.isMatched === false) {
        return { ...card, isFrontSideVisible: value };
      } else {
        return { ...card };
      }
    });
  }

  function showCardFrontSideWhenCardClicked(
    selectedCardValue: number,
    value: boolean,
    id: number,
    game: Card[]
  ): Card[] {
    return game.map((card) => {
      if (card.value === selectedCardValue && card.id === id) {
        return { ...card, isFrontSideVisible: value };
      } else {
        return { ...card };
      }
    });
  }
  return {
    showCardFrontSideWhenCardClicked,
    showCardBackSideWhenNotMatch,
    createNewGameStateWhenCardsMatch
  };
}
