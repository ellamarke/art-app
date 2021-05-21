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
  ChangeGalleryNameAction,
  AddGalleryDescriptionAction,
  ChangeActiveGalleryIdAction,
  ChangeActiveArtistAction,
  SetDateFilterAction,
  ChangeActiveArtworkAction,
} from "./types";

const initialState: State = {
  savedArtworks: [],
  savedGalleries: [],
  activeGalleryId: null,
  activeArtist: null,
  activeArtwork: null,
  dateFilters: {
    "1930": true,
    "1940": true,
    "1950": true,
    "1960": true,
    "1970": true,
    "1980": true,
    "1990": true,
    "2000": true,
  },
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

    case ActionTypes.CHANGE_GALLERY_NAME:
      return changeGalleryName(state, action);

    case ActionTypes.ADD_GALLERY_DESCRIPTION:
      return addGalleryDescription(state, action);

    case ActionTypes.CHANGE_ACTIVE_GALLERY:
      return changeActiveGalleryId(state, action);

    case ActionTypes.CHANGE_ACTIVE_ARTIST:
      return changeActiveArtist(state, action);

    case ActionTypes.SET_DATE_FILTER:
      return setDateFilter(state, action);

    case ActionTypes.CHANGE_ACTIVE_ARTWORK:
      return changeActiveArtwork(state, action);

    default:
      return state;
  }
};

const saveArtwork = (state: State, action: SaveArtworkAction): State => {
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

const removeArtwork = (state: State, action: RemoveArtworkAction): State => {
  const savedArtworks = state.savedArtworks;
  const newSavedArtworks = savedArtworks.filter(
    (artwork) => artwork.id !== action.id
  );
  return {
    ...state,
    savedArtworks: newSavedArtworks,
  };
};

const createGallery = (state: State, action: CreateGalleryAction): State => {
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

const removeGallery = (state: State, action: RemoveGalleryAction): State => {
  const savedGalleries = state.savedGalleries;
  const newSavedGalleries = savedGalleries.filter(
    (gallery) => gallery.name !== action.galleryName
  );
  return {
    ...state,
    savedGalleries: newSavedGalleries,
  };
};

const changeGalleryName = (
  state: State,
  action: ChangeGalleryNameAction
): State => {
  const savedGalleries = state.savedGalleries;
  const newSavedGalleries = savedGalleries.map((gallery) => {
    if (gallery.id === action.galleryId) {
      return {
        ...gallery,
        name: action.galleryName,
      };
    } else {
      return gallery;
    }
  });

  return {
    ...state,
    savedGalleries: newSavedGalleries,
  };
};

const addGalleryDescription = (
  state: State,
  action: AddGalleryDescriptionAction
): State => {
  const savedGalleries = state.savedGalleries;
  const newSavedGalleries = savedGalleries.map((gallery) => {
    if (gallery.id === action.galleryId) {
      return {
        ...gallery,
        description: action.description,
      };
    } else {
      return gallery;
    }
  });

  return {
    ...state,
    savedGalleries: newSavedGalleries,
  };
};

const changeActiveGalleryId = (
  state: State,
  action: ChangeActiveGalleryIdAction
): State => {
  const newActiveGalleryId = action.galleryId;
  return {
    ...state,
    activeGalleryId: newActiveGalleryId,
  };
};

const changeActiveArtist = (
  state: State,
  action: ChangeActiveArtistAction
): State => {
  const newActiveArtist = action.artistName;
  return {
    ...state,
    activeArtist: newActiveArtist,
  };
};

const setDateFilter = (state: State, action: SetDateFilterAction): State => {
  return {
    ...state,
    dateFilters: {
      ...state.dateFilters,
      [action.date]: action.enabled,
    },
  };
};

const changeActiveArtwork = (
  state: State,
  action: ChangeActiveArtworkAction
): State => {
  const newActiveArtwork = action.artworkName;
  return {
    ...state,
    activeArtwork: newActiveArtwork,
  };
};

export default state;
