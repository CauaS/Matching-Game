import { Action, Card, Types as types } from "../types";
import { useGameFunctions } from "../../hooks/useGameFunctions";
const {
  showCardFrontSideWhenCardClicked,
  showCardBackSideWhenNotMatch,
  createNewGameStateWhenCardsMatch
} = useGameFunctions();

export default function cardReducer(
  state: Card[],
  action: Action
) {
  switch (action.type) {
    case types.SHOW_CARD_FRONT_SIDE:
      return showCardFrontSideWhenCardClicked(
        action.payload.selectedCard,
        action.payload.isFrontSideVisible,
        action.payload.cardId,
        state
      );
    case types.MATCH:
      return createNewGameStateWhenCardsMatch(
        action.payload.selectedCard,
        action.payload.isFrontSideVisible,
        state
      );
    case types.NO_MATCH:
      return showCardBackSideWhenNotMatch(
        action.payload.isFrontSideVisible,
        state
      );
    default:
      return state;
  }
}
