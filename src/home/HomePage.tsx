import ArtRendererContainer from "../shared/ArtRendererContainer";
import ArtworkSpotlight from "./ArtworkSpotlight";

function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <ArtworkSpotlight
        imgSRC="img/picasso/femme-au-beret.jpg"
        artworkName="Femme au Beret Orange"
        artistName="Pablo Picasso"
        created={1937}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
}

export default HomePage;
