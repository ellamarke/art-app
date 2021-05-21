import { connect, ConnectedProps } from "react-redux";
import { changeActiveArtwork } from "../store/actions";
import { allArtworks } from "../reference/AllArtworks";
import { State } from "../store/types";

const mapStateToProps = (state: State) => ({
  activeArtwork: state.activeArtwork,
});

const mapDispatchToProps = {
  changeActiveArtwork,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function ArtworkPage({ activeArtwork }: Props) {
  const currentArtwork = allArtworks.find((artwork) => {
    return artwork.artworkName === activeArtwork;
  });

  if (typeof currentArtwork === "undefined") {
    return (
      <div>
        <h1>Could not find artwork</h1>
      </div>
    );
  }
  return (
    <div>
      <img src={currentArtwork.imgSrc} alt={currentArtwork.artworkName} />
      <h2>{currentArtwork.artworkName}</h2>
      <h3>{currentArtwork.date}</h3>
      <p>{currentArtwork.description}</p>
    </div>
  );
}

export default connector(ArtworkPage);
