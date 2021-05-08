import reducer from "./reducer";
import { saveArtwork, removeArtwork, addGalleryDescription } from "./actions";

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

    it("saving an artwork saves adds to existing artwork store", () => {
      const state = reducer(
        {
          savedArtworks: [
            {
              id: "1",
              gallery: "French art",
            },
          ],
          savedGalleries: [],
        },
        saveArtwork("3", "Spanish art")
      );

      expect(state.savedArtworks).toHaveLength(2);

      expect(state.savedArtworks).toContainEqual({
        id: "3",
        gallery: "Spanish art",
      });
    });
  });

  describe("REMOVE_ARTWORK", () => {
    it("pressing delete removes an artwork from the store", () => {
      const state = reducer(
        {
          savedArtworks: [
            {
              id: "1",
              gallery: "French art",
            },
          ],
          savedGalleries: [],
        },
        removeArtwork("1")
      );

      expect(state.savedArtworks).toHaveLength(0);
    });
  });

  describe("ADD_GALLERY_DESCRIPTION", () => {
    it("Adds a description to the gallery object", () => {
      const state = reducer(
        {
          savedArtworks: [],
          savedGalleries: [
            {
              name: "my gallery",
              id: "1",
            },
          ],
        },
        addGalleryDescription("my description", "1")
      );

      expect(state.savedGalleries[0].description).toEqual("my description");
    });
  });
});
