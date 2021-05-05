export interface Artwork {
  id: string;
  gallery: string;
}

export interface State {
  savedArtworks: Artwork[];
  savedGalleries: Gallery[];
}

export interface Gallery {
  name: string;
  id: string;
}

export enum ActionTypes {
  SAVE_ARTWORK = "SAVE_ARTWORK",
  REMOVE_ARTWORK = "REMOVE_ARTWORK",
  CREATE_GALLERY = "CREATE_GALLERY",
  /* these are variables, you access them with DiscoverActionTypes.xxxxx */
}

export interface SaveArtworkAction {
  type: typeof ActionTypes.SAVE_ARTWORK;
  id: string;
  gallery: string;
}

export interface RemoveArtworkAction {
  type: typeof ActionTypes.REMOVE_ARTWORK;
  id: string;
  gallery: string;
}

export interface CreateGalleryAction {
  type: typeof ActionTypes.CREATE_GALLERY;
  galleryName: string;
}

export type Action =
  | SaveArtworkAction
  | RemoveArtworkAction
  | CreateGalleryAction;
