import ArtworkSpotlight from "../home/ArtworkSpotlight";
import {
  Action,
  State,
  ActionTypes,
  SaveArtworkAction,
  Artwork,
  RemoveArtworkAction,
} from "./types";

const initialState: State = {
  savedArtworks: [],
};

const state = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SAVE_ARTWORK:
      return saveArtwork(state, action);

    case ActionTypes.REMOVE_ARTWORK:
      return removeArtwork(state, action);

    default:
      return state;
  }
};

const saveArtwork = (state: State, action: SaveArtworkAction) => {
  return {
    ...state,
    savedArtworks: addArtwork(state.savedArtworks, {
      id: action.id,
      gallery: action.gallery,
    }),
  };
};

const addArtwork = (artworks: Artwork[], artwork: Artwork) => [
  ...artworks,
  artwork,
];

const removeArtwork = (state: State, action: RemoveArtworkAction) => {
  const savedArtworks = state.savedArtworks;
  const newSavedArtworks = savedArtworks.filter(
    (artwork) => artwork.id != action.id
  );
  return {
    ...state,
    savedArtworks: newSavedArtworks,
  };
};

export default state;
