import { useEffect, useState } from "react";
import ArtRenderer from "../shared/ArtRenderer";

type Artwork = {
  imageURL: string;
  artistName: string;
  artworkName: string;
};

type ArtworkSearchResults = {
  results: Artwork[];
  resultCount: number;
};

function HomePage() {
  const [artworks, setArtworks] = useState<ArtworkSearchResults>({
    results: [],
    resultCount: 0,
  });
  useEffect(() => {
    fetch(`/api/art/search`)
      .then((res) => res.json())
      .then((result) => {
        setArtworks(result);
        console.log(result);
      });
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      {artworks.results.map((artwork) => (
        <ArtRenderer
          src={artwork.imageURL}
          artworkName={artwork.artworkName}
          artistName={artwork.artistName}
        />
      ))}
    </div>
  );
}

export default HomePage;
