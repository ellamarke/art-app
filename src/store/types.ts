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
  description?: string;
}

export enum ActionTypes {
  SAVE_ARTWORK = "SAVE_ARTWORK",
  REMOVE_ARTWORK = "REMOVE_ARTWORK",
  CREATE_GALLERY = "CREATE_GALLERY",
  REMOVE_GALLERY = "REMOVE_GALLERY",
  CHANGE_GALLERY_NAME = "CHANGE_GALLERY_NAME",
  ADD_GALLERY_DESCRIPTION = "ADD_GALLERY_DESCRIPTION",
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
}

export interface CreateGalleryAction {
  type: typeof ActionTypes.CREATE_GALLERY;
  galleryName: string;
}

export interface RemoveGalleryAction {
  type: typeof ActionTypes.REMOVE_GALLERY;
  galleryName: string;
}

export interface ChangeGalleryNameAction {
  type: typeof ActionTypes.CHANGE_GALLERY_NAME;
  galleryName: string;
  galleryId: string;
}

export interface AddGalleryDescriptionAction {
  type: typeof ActionTypes.ADD_GALLERY_DESCRIPTION;
  galleryId: string;
  description: string;
}

export type Action =
  | SaveArtworkAction
  | RemoveArtworkAction
  | CreateGalleryAction
  | RemoveGalleryAction
  | ChangeGalleryNameAction
  | AddGalleryDescriptionAction;
