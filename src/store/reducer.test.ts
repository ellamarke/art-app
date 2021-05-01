import reducer from "./reducer";
import { saveArtwork } from "./actions";

describe("reducer", () => {
  describe("SAVE_ARTWORK", () => {
    it("saving an artwork saves it in store", () => {
      const state = reducer(undefined, saveArtwork("3", "Spanish art"));

      expect(state.savedArtworks).toHaveLength(1);

      expect(state.savedArtworks).toContainEqual({
        id: "3",
        gallery: "Spanish art",
      });
    });
  });
});
