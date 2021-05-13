import { ArtworkDetailsType } from "./AllArtworks";
import { blackRadicalArt, NormanRockwellRetrospective } from "./Users";

export type UserGalleryType = {
  gallery: ArtworkDetailsType[];
  galleryName: string;
  username: string;
  id: string;
};

export const userGalleries: UserGalleryType[] = [
  {
    gallery: blackRadicalArt,
    galleryName: "Black Radical Art",
    username: "The Met Gallery, NY",
    id: "1",
  },
  {
    gallery: NormanRockwellRetrospective,
    galleryName: "Normal Rockwell Retrospective",
    username: "The Tate Modern",
    id: "2",
  },
];
