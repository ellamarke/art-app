import { v4 as uuidv4 } from "uuid";
import {
  Action,
  State,
  ActionTypes,
  SaveArtworkAction,
  Artwork,
  RemoveArtworkAction,
  CreateGalleryAction,
  RemoveGalleryAction,
} from "./types";

const initialState: State = {
  savedArtworks: [],
  savedGalleries: [
    {
      name: "French Art",
      id: uuidv4(),
    },
    {
      name: "Mexican Art",
      id: uuidv4(),
    },
    {
      name: "Cool Art",
      id: uuidv4(),
    },
  ],
};

const state = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SAVE_ARTWORK:
      return saveArtwork(state, action);

    case ActionTypes.REMOVE_ARTWORK:
      return removeArtwork(state, action);

    case ActionTypes.CREATE_GALLERY:
      return createGallery(state, action);

    case ActionTypes.REMOVE_GALLERY:
      return removeGallery(state, action);

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

const createGallery = (state: State, action: CreateGalleryAction) => {
  const savedGalleries = state.savedGalleries;
  const newGallery = {
    name: action.galleryName,
    id: uuidv4(),
  };
  const newSavedGalleries = [...savedGalleries, newGallery];

  return {
    ...state,
    savedGalleries: newSavedGalleries,
  };
};

const removeGallery = (state: State, action: RemoveGalleryAction) => {
  const savedGalleries = state.savedGalleries;
  const newSavedGalleries = savedGalleries.filter(
    (gallery) => gallery.name != action.galleryName
  );
  return {
    ...state,
    savedGalleries: newSavedGalleries,
  };
};

export default state;
