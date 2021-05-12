import { ArtworkDetailsType } from "./AllArtworks";
import { blackRadicalArt, TestGallery } from "./Users";

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
    gallery: TestGallery,
    galleryName: "Test gallery",
    username: "Test user",
    id: "2",
  },
];
