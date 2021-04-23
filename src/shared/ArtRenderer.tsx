type Artwork = {
  src: string;
  artworkName: string;
  artistName: string;
};

function ArtRenderer({ src, artworkName, artistName }: Artwork): JSX.Element {
  return (
    <div className="artwork-container">
      <img src={src} />
      <div className="info">
        <p className="artwork-name">{artworkName}</p>
        <p className="artist-name">{artistName}</p>
      </div>
    </div>
  );
}

export default ArtRenderer;
