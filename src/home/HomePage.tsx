import ArtRenderer from "../shared/ArtRenderer";

function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <ArtRenderer
        src="/img/starry-night.jpg"
        artworkName="Ella's painting"
        artistName="Ella Marke"
      />
    </div>
  );
}

export default HomePage;
