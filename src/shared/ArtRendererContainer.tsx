import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import ArtRenderer from "../shared/ArtRenderer";
import { APIArtwork, State } from "../store/types";
import { fetchArtwork } from "../store/actions";

const mapStateToProps = (state: State) => ({
  apiArtworks: state.apiArtworks,
});

const mapDispatchToProps = {
  fetchArtwork,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  apiArtworks: APIArtwork[];
};

function ArtRendererContainer({ apiArtworks, fetchArtwork }: Props) {
  useEffect(() => {
    fetchArtwork("picasso");
  }, [fetchArtwork]);

  return (
    <div>
      <h2>Rendered Artworks</h2>
      {apiArtworks.map((artwork) => (
        <ArtRenderer
          src={artwork.imageURL}
          artworkName={artwork.artworkName}
          artistName={artwork.artistName}
        />
      ))}
    </div>
  );
}

export default connector(ArtRendererContainer);
