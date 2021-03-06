import { ArtworkDetails } from "../store/types";

export type ArtistType = {
  name: string;
  dates: string;
  description?: string;
  id: string;
  artworks: ArtworkDetails[];
};

export const allArtists: ArtistType[] = [
  {
    name: "Pablo Picasso",
    dates: "1881 - 1973",
    description:
      "Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.",
    id: "1",
    artworks: [
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
    ],
  },
  {
    name: "Norman Rockwell",
    dates: "1894 - 1978",
    description:
      "Norman Percevel Rockwell was an American painter and illustrator. His works have a broad popular appeal in the United States for their reflection of American culture. Rockwell is most famous for the cover illustrations of everyday life he created for The Saturday Evening Post magazine over nearly five decades.",
    id: "2",
    artworks: [
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
    ],
  },
];
