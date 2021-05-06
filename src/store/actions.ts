import { Action, ActionTypes } from "./types";

export const saveArtwork = (id: string, gallery: string): Action => ({
  type: ActionTypes.SAVE_ARTWORK,
  id,
  gallery,
});

export const removeArtwork = (id: string): Action => ({
  type: ActionTypes.REMOVE_ARTWORK,
  id,
});

export const createGallery = (galleryName: string): Action => ({
  type: ActionTypes.CREATE_GALLERY,
  galleryName,
});

export const removeGallery = (galleryName: string): Action => ({
  type: ActionTypes.REMOVE_GALLERY,
  galleryName,
});
