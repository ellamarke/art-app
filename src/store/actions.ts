import { Action, ActionTypes, DateFilter } from "./types";

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

export const changeGalleryName = (
  galleryName: string,
  galleryId: string
): Action => ({
  type: ActionTypes.CHANGE_GALLERY_NAME,
  galleryName,
  galleryId,
});

export const addGalleryDescription = (
  description: string,
  galleryId: string
): Action => ({
  type: ActionTypes.ADD_GALLERY_DESCRIPTION,
  description,
  galleryId,
});

export const changeActiveGalleryId = (galleryId: string): Action => ({
  type: ActionTypes.CHANGE_ACTIVE_GALLERY,
  galleryId,
});

export const changeActiveArtist = (artistName: string): Action => ({
  type: ActionTypes.CHANGE_ACTIVE_ARTIST,
  artistName,
});

export const setDateFilter = (date: keyof DateFilter, enabled: boolean) => ({
  type: ActionTypes.SET_DATE_FILTER,
  date,
  enabled,
});
