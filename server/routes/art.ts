import fetch from "node-fetch";
const apiKey = process.env.EUROPEANA_API_KEY;

type EuropeArtItem = {
  dcCreator: string[];
  edmIsShownBy: string[];
  dcTitleLangAware: Record<string, string[]>;
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
  artworkName: string;
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

  const artworks: ArtworkSearchResults = {
    results: results.items.map((item) => ({
      imageURL: extractUrl(item),
      artistName: extractArtists(item),
      artworkName: extractTitle(item),
    })),
    resultCount: results.totalResults,
  };

  res.send(JSON.stringify(artworks));
};

function extractUrl(item: EuropeArtItem): string {
  return (item?.edmIsShownBy && item?.edmIsShownBy[0]) || "Image unavailable";
}

function extractArtists(item: EuropeArtItem): string {
  return (item?.dcCreator && item?.dcCreator[0]) || "Artist unknown";
}

function extractTitle(item: EuropeArtItem): string {
  return (
    (item?.dcTitleLangAware?.en && item?.dcTitleLangAware.en[0]) ||
    firstLanguage(item?.dcTitleLangAware)
  );
}

function firstLanguage(titles: Record<string, string[]>): string {
  if (Object.keys(titles)) {
    const firstLanguage = Object.keys(titles)[0];
    return (titles[firstLanguage] && titles[firstLanguage][0]) || "No Title";
  }
  return "No title";
}
