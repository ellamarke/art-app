export interface ArtworkGalleryLink {
  id: string;
  gallery: string;
}

export type ArtworkDetails = {
  artworkName: string;
  artistName: string;
  date: number;
  imgSrc: string;
  description?: string;
  id: string;
  spotlightPicture: boolean;
};

export interface State {
  savedArtworks: ArtworkGalleryLink[];
  savedGalleries: Gallery[];
  activeGalleryId: string | null;
  activeArtist: string | null;
  activeArtwork: string | null;
  dateFilters: DateFilter;
  apiArtworks: APIArtwork[];
}

export interface Gallery {
  name: string;
  id: string;
  description?: string;
}

export interface DateFilter {
  "1930": boolean;
  "1940": boolean;
  "1950": boolean;
  "1960": boolean;
  "1970": boolean;
  "1980": boolean;
  "1990": boolean;
  "2000": boolean;
}

export type APIArtwork = {
  imageURL: string;
  artistName: string;
  artworkName: string;
};

export enum ActionTypes {
  SAVE_ARTWORK = "SAVE_ARTWORK",
  REMOVE_ARTWORK = "REMOVE_ARTWORK",
  CREATE_GALLERY = "CREATE_GALLERY",
  REMOVE_GALLERY = "REMOVE_GALLERY",
  CHANGE_GALLERY_NAME = "CHANGE_GALLERY_NAME",
  ADD_GALLERY_DESCRIPTION = "ADD_GALLERY_DESCRIPTION",
  CHANGE_ACTIVE_GALLERY = "CHANGE_ACTIVE_GALLERY",
  CHANGE_ACTIVE_ARTIST = "CHANGE_ACTIVE_ARTIST",
  SET_DATE_FILTER = "SET_DATE_FILTER",
  CHANGE_ACTIVE_ARTWORK = "CHANGE_ACTIVE_ARTWORK",
  FETCH_ARTWORK = "FETCH_ARTWORK",
  STORE_ARTWORK = "STORE_ARTWORK",
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

export interface ChangeActiveGalleryIdAction {
  type: typeof ActionTypes.CHANGE_ACTIVE_GALLERY;
  galleryId: string;
}

export interface ChangeActiveArtistAction {
  type: typeof ActionTypes.CHANGE_ACTIVE_ARTIST;
  artistName: string;
}

export interface SetDateFilterAction {
  type: typeof ActionTypes.SET_DATE_FILTER;
  date: keyof DateFilter;
  enabled: boolean;
}

export interface ChangeActiveArtworkAction {
  type: typeof ActionTypes.CHANGE_ACTIVE_ARTWORK;
  artworkName: string;
}

export interface FetchArtworkAction {
  type: typeof ActionTypes.FETCH_ARTWORK;
  searchTerm: string;
}

export interface StoreArtworkAction {
  type: typeof ActionTypes.STORE_ARTWORK;
  artworks: APIArtwork[];
}

export type Action =
  | SaveArtworkAction
  | RemoveArtworkAction
  | CreateGalleryAction
  | RemoveGalleryAction
  | ChangeGalleryNameAction
  | AddGalleryDescriptionAction
  | ChangeActiveGalleryIdAction
  | ChangeActiveArtistAction
  | SetDateFilterAction
  | ChangeActiveArtworkAction
  | FetchArtworkAction
  | StoreArtworkAction;
