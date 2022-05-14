import React, { useCallback, useReducer } from "react";
import CardFront from "./card/card-front/CardFront";
import CardBack from "./card/card-back/CardBack";
import {
  Card,
  Types as types,
  showCardFrontSidePayload,
  matchPayload,
  noMatchPayload
} from "./card/types";
import {
  checkIfCardsMatch,
  hasSelectedCardsMoreThenOneCard
} from "./validations";
import {
  increaseScore,
  resetSelectedCards,
  addSeletectCardToArray
} from "./utils";
import gameCards from "./gameCards";
import cardReducer from "./card/reducer/cardReducer";

export default function App() {
  const score = React.useRef(0);
  const selectedCards = React.useRef<Array<Card>>([]);
  const [game, dispatcher] = useReducer(cardReducer, gameCards);

  const styleCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const scoreStyle = {
    fontSize: 50,
    fontFamily: "luminari",
    color: "#fff"
  };

  const onClickCard = useCallback((card: Card) => {
    const selectedCardValue = card.value;
    dispatcher({
      type: types.SHOW_CARD_FRONT_SIDE,
      payload: {
        selectedCard: selectedCardValue,
        isFrontSideVisible: true,
        cardId: card.id
      }
    });
    addSeletectCardToArray(card, selectedCards);
    if (hasSelectedCardsMoreThenOneCard(selectedCards)) {
      const areCardsTheSame = checkIfCardsMatch(
        selectedCardValue,
        selectedCards
      );
      if (areCardsTheSame) {
        dispatcher({
          type: types.MATCH,
          payload: {
            selectedCard: selectedCardValue,
            isFrontSideVisible: true
          }
        });
        increaseScore(score);
        resetSelectedCards(selectedCards);
      } else {
        setTimeout(
          () =>
            dispatcher({
              type: types.NO_MATCH,
              payload: { isFrontSideVisible: false }
            }),
          1000
        );
      }
      resetSelectedCards(selectedCards);
    }
  }, []);

  return (
    <div
      style={{
        ...styleCenter,
        height: "100vh"
      }}
    >
      <span style={scoreStyle}>{score.current}</span>
      <div
        style={{
          ...styleCenter,
          flexWrap: "wrap",
          width: "80vw"
        }}
      >
        {game.map((card: Card, index: number) => (
          <div
            key={index}
            onClick={() => onClickCard(card)}
            style={{
              cursor: "pointer",
              margin: 3,
              padding: 3
            }}
          >
            {card.isFrontSideVisible ? (
              <CardFront {...card} />
            ) : (
              <CardBack {...card} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
