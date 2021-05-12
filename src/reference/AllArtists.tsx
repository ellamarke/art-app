import { ArtworkDetailsType } from "../reference/AllArtworks";
export type ArtistType = {
  name: string;
  dates: string;
  description?: string;
  id: string;
  artworks: ArtworkDetailsType[];
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
];
