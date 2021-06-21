import { connect, ConnectedProps } from "react-redux";
import ArtRenderer from "../shared/ArtRenderer";
import { APIArtwork, State } from "../store/types";
import { fetchArtwork, setSearchTerm } from "../store/actions";

const mapStateToProps = (state: State) => ({
  apiArtworks: state.apiArtworks,
  searchTerm: state.searchTerm,
});

const mapDispatchToProps = {
  fetchArtwork,
  setSearchTerm,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  apiArtworks: APIArtwork[];
};

function ArtRendererContainer({
  apiArtworks,
  fetchArtwork,
  setSearchTerm,
  searchTerm,
}: Props) {
  const onButtonPressed = () => {
    console.log(searchTerm);
    setSearchTerm(searchTerm);
    fetchArtwork();
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
      <button onClick={onButtonPressed}>Get art</button>
      <h2>Rendered Artworks</h2>
      {apiArtworks.map((artwork) => (
        <ArtRenderer
          src={artwork.imageURL}
          artworkName={artwork.artworkName}
          artistName={artwork.artistName}
          key={artwork.imageURL}
        />
      ))}
    </div>
  );
}

export default connector(ArtRendererContainer);
