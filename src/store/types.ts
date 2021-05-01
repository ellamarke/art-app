export interface Artwork {
  id: string;
  gallery: string;
}

export interface State {
  savedArtworks: Artwork[];
}

export enum ActionTypes {
  SAVE_ARTWORK = "SAVE_ARTWORK",
  /* these are variables, you access them with DiscoverActionTypes.xxxxx */
}

/* just defining the types */
interface SaveArtworkAction {
  type: typeof ActionTypes.SAVE_ARTWORK;
  id: string;
  gallery: string;
}

export type Action = SaveArtworkAction;
