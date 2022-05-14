import { useGame } from "./useGame";
describe("Testing hooks", () => {
  it("Should return a game and setGame ", () => {
    const { game, setGame } = useGame([
      {
        id: 1,
        back: "back",
        front: "front",
        isMatched: false,
        show: false,
        value: 1
      }
    ]);

    expect(setGame).toBeDefined();
    expect(game).toBe({
      id: 1,
      back: "back",
      front: "front",
      isMatched: false,
      show: false,
      value: 1
    })
  });
});
