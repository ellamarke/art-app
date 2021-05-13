import { v4 as uuidv4 } from "uuid";
import { Gallery, Artwork } from "../store/types";
import { ArtworkDetailsType } from "../reference/AllArtworks";

export type User = {
  username: string;
  savedArtworks: Artwork[];
  savedGalleries: Gallery[];
};

export const TheMet: User = {
  username: "The Met Gallery, NY",
  savedArtworks: [
    {
      id: "bra-1",
      gallery: "Black Radical Art",
    },
  ],
  savedGalleries: [
    {
      name: "Black Radical Art",
      id: uuidv4(),
      description: "There is a long history of Black radical art.",
    },
  ],
};

export const blackRadicalArt: ArtworkDetailsType[] = [
  {
    artworkName: "Nikki's Place",
    artistName: "Carrie Mae Weem",
    date: 2005,
    imgSrc: "img/black-radical-art/nikkis-place.jpeg",
    id: "bra-1",
    spotlightPicture: false,
  },
  {
    artworkName: "Guarded Conditions",
    artistName: "Lorna Simpson",
    date: 1989,
    imgSrc: "img/black-radical-art/guarded-conditions.jpeg",
    id: "bra-2",
    spotlightPicture: false,
  },
  {
    artworkName: "We Shall Survive Without A Doubt",
    artistName: "Emory Douglas",
    date: 1971,
    imgSrc: "img/black-radical-art/we-shall-survive.jpeg",
    id: "bra-3",
    spotlightPicture: true,
  },
  {
    artworkName: "What's Going On",
    artistName: "Barkley Hendricks",
    date: 1974,
    imgSrc: "img/barkley-hendricks/whats-going-on.jpeg",
    id: "bra-4",
    spotlightPicture: true,
  },
  {
    artworkName: "05. Art Is. . . (Girlfriends Times Two)",
    artistName: "Lorraine O'Grady",
    date: 1983,
    imgSrc: "img/black-radical-art/art-is.jpeg",
    id: "bra-5",
    spotlightPicture: true,
  },
  {
    artworkName: "The Liberation of Aunt Jemima: Cocktail",
    artistName: "Betye Saar",
    date: 1973,
    imgSrc: "img/black-radical-art/liberation-of-aunt-jemima.jpg",
    id: "bra-6",
    spotlightPicture: true,
  },
  {
    artworkName: "Committee to Defend the Black Panthers",
    artistName: "Faith Ringgold",
    date: 1970,
    imgSrc: "img/black-radical-art/committee-to-defend.jpg",
    id: "bra-7",
    spotlightPicture: false,
  },
];

export const NormanRockwellRetrospective: ArtworkDetailsType[] = [
  {
    artworkName: "Golden Rule",
    artistName: "Norman Rockwell",
    date: 1961,
    imgSrc: "img/norman-rockwell/golden-rule.jpeg",
    id: "roc-1",
    spotlightPicture: true,
  },
  {
    artworkName: "Murder in Mississippi",
    artistName: "Norman Rockwell",
    date: 1965,
    imgSrc: "img/norman-rockwell/murder-in-mississippi.jpeg",
    id: "roc-2",
    spotlightPicture: true,
  },
  {
    artworkName: "The Runaway",
    artistName: "Norman Rockwell",
    date: 1958,
    imgSrc: "img/norman-rockwell/runaway.jpeg",
    id: "roc-3",
    spotlightPicture: true,
  },
  {
    artworkName: "What's Going On",
    artistName: "Norman Rockwell",
    date: 1974,
    imgSrc: "img/norman-rockwell/new-kids.png",
    id: "roc-4",
    spotlightPicture: false,
  },
  {
    artworkName: "The Problem We All Live With",
    artistName: "Norman Rockwell",
    date: 1964,
    imgSrc: "img/norman-rockwell/the-problem.jpeg",
    id: "roc-5",
    spotlightPicture: true,
  },
  {
    artworkName: "Tired Salesgirl on Christmas Eve",
    artistName: "Norman Rockwell",
    date: 1947,
    imgSrc: "img/norman-rockwell/tired-salesgirl.jpeg",
    id: "roc-6",
    spotlightPicture: false,
  },
];
