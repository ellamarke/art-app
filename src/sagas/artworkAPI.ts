import { APIArtwork } from "../store/types";

export function getArtwork(searchTerm: string): Promise<APIArtwork[]> {
  console.log("in getArtwork", searchTerm);
  return fetch(`/api/art/search?searchTerm=${searchTerm}`)
    .then((res) => res.json())
    .then((data) => data.results);
}
