import { Action, ActionTypes } from "./types";

export const saveArtwork = (id: string, gallery: string): Action => ({
  type: ActionTypes.SAVE_ARTWORK,
  id,
  gallery,
});

export const removeArtwork = (id: string, gallery: string): Action => ({
  type: ActionTypes.REMOVE_ARTWORK,
  id,
  gallery,
});
