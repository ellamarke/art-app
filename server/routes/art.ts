import fetch from "node-fetch";
const apiKey = process.env.EUROPEANA_API_KEY;

type EuropeArtItem = {
  dcCreator: string[];
  edmIsShownBy: string[];
};
type EuropeSearchResponse = {
  apikey: string;
  success: boolean;
  requestNumber: number;
  itemsCount: number;
  totalResults: number;
  items: EuropeArtItem[];
};

type Artwork = {
  imageURL: string;
  artistName: string;
};

type ArtworkSearchResults = {
  results: Artwork[];
  resultCount: number;
};

export const getArt = async (req: any, res: any) => {
  const id = req.params.searchTerm;
  console.log("Doing a art search ...");

  const apiResponse = await fetch(
    `https://api.europeana.eu/record/v2/search.json?query=Paris&reusability=open&media=true&wskey=${apiKey}`
  );

  const results = (await apiResponse.json()) as EuropeSearchResponse;

  const artWorks: ArtworkSearchResults = {
    results: results.items.map((item) => ({
      imageURL:
        (item?.edmIsShownBy && item?.edmIsShownBy[0]) || "Image unavailable",
      artistName: (item?.dcCreator && item?.dcCreator[0]) || "Artist unknown",
    })),
    resultCount: results.totalResults,
  };

  res.send(JSON.stringify(artWorks));
};
