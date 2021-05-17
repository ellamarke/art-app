import {
  blackRadicalArt,
  FeministArt,
  NormanRockwellRetrospective,
} from "./Users";

export type ArtworkDetailsType = {
  artworkName: string;
  artistName: string;
  date: number;
  imgSrc: string;
  description?: string;
  id: string;
  spotlightPicture: boolean;
};

export const picassoTimeline: ArtworkDetailsType[] = [
  {
    artworkName: "Garcon a la pipe",
    artistName: "Pablo Picasso",
    date: 1905,
    imgSrc: "img/picasso/garcon.jpg",
    id: "1",
    spotlightPicture: false,
  },
  {
    artworkName: "Les Demoiselles d'Avignon",
    artistName: "Pablo Picasso",
    date: 1907,
    imgSrc: "img/picasso/les-demoiselles.jpg",
    id: "2",
    spotlightPicture: false,
  },
  {
    artworkName: "Femme au béret orange",
    artistName: "Pablo Picasso",
    date: 1937,
    imgSrc: "img/picasso/femme-au-beret.jpg",
    id: "3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    spotlightPicture: true,
  },
  {
    artworkName: "Guernica",
    artistName: "Pablo Picasso",
    date: 1937,
    imgSrc: "img/picasso/guernica.jpeg",
    id: "4",
    spotlightPicture: false,
  },
  {
    artworkName: "Les Femmes d'Alger",
    artistName: "Pablo Picasso",
    date: 1955,
    imgSrc: "img/picasso/les-femmes.jpeg",
    id: "5",
    spotlightPicture: false,
  },
];

export const vanGoghTimeline: ArtworkDetailsType[] = [
  {
    artworkName: "Cafe at Night",
    artistName: "Van Gogh",
    date: 1955,
    imgSrc: "img/van-gogh/cafe.jpeg",
    id: "6",
    spotlightPicture: false,
  },
];

export const allArtworks = [
  ...picassoTimeline,
  ...vanGoghTimeline,
  ...blackRadicalArt,
  ...NormanRockwellRetrospective,
  ...FeministArt,
];
