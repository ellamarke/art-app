import { connect, ConnectedProps } from "react-redux";
import { changeActiveArtist } from "../store/actions";
import { allArtworks } from "../reference/AllArtworks";
import { allArtists } from "../reference/AllArtists";
import { State } from "../store/types";

const mapStateToProps = (state: State) => ({
  activeArtist: state.activeArtist,
});

const mapDispatchToProps = {
  changeActiveArtist,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function ArtistPage({ activeArtist }: Props) {
  const currentArtist = allArtists.find((artist) => {
    return artist.name === activeArtist;
  });

  if (typeof currentArtist === "undefined") {
    return (
      <div>
        <h1>Could not find artist</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{currentArtist.name}</h1>
      {allArtworks
        .filter((artwork) => artwork.artistName === currentArtist.name)
        .map((artwork) => {
          return <p>HELLPO</p>;
        })}
    </div>
  );
}

export default connector(ArtistPage);
