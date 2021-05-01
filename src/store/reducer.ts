import { Action, State, ActionTypes, Artwork } from "./types";

const initialState: State = {
  savedArtworks: [],
};

const state = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SAVE_ARTWORK:
      return {
        ...state,
        savedArtworks: [
          ...state.savedArtworks,
          { id: action.id, gallery: action.gallery },
        ],
      };

    default:
      return state;
  }
};

export default state;
