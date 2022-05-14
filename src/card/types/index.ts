export type Card = {
  id: number;
  front: string;
  back: string;
  isFrontSideVisible: boolean;
  value: number;
  isMatched: boolean;
};

export type Action =
  | {
      type: Types.MATCH;
      payload: matchPayload;
    }
  | {
      type: Types.NO_MATCH;
      payload: noMatchPayload;
    }
  | {
      type: Types.SHOW_CARD_FRONT_SIDE;
      payload: showCardFrontSidePayload;
    };

export type showCardFrontSidePayload = {
  selectedCard: number;
  isFrontSideVisible: boolean;
  cardId: number;
};

export type matchPayload = {
  selectedCard: number;
  isFrontSideVisible: boolean;
};

export type noMatchPayload = {
  isFrontSideVisible: boolean;
};

export type payloads = showCardFrontSidePayload | matchPayload | noMatchPayload;

export enum Types {
  SHOW_CARD_FRONT_SIDE = "showCardFrontSide",
  MATCH = "match",
  NO_MATCH = "noMatch"
}
