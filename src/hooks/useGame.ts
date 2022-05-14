import React from "react";
import { Card } from "../card/types";

export function useGame(cards: Array<Card>) {
  const [game, setGame] = React.useState<Array<Card>>(cards);
  return { game, setGame };
}
