import { Artwork, State } from "../store/types";
import { connect, ConnectedProps } from "react-redux";
import DeleteButton from "../shared/buttons/DeleteButton";
import { allArtworks, ArtworkTimelineType } from "../reference/AllArtworks";

const mapStateToProps = (state: State) => ({
  artworks: state.savedArtworks,
});

const mapDispatchToProps = {
  //
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
); /* this connects the component to the store */

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  artworks: Artwork[];
};

function Profile({ artworks }: Props) {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        {artworks.map((savedArtwork) => {
          const artwork = allArtworks.find((artwork) => {
            return artwork.id === savedArtwork.id;
          }) as ArtworkTimelineType;
          return (
            <div>
              <li>
                {artwork.artistName}, {artwork.artworkName}
              </li>
              <li>
                <img src={artwork.imgSrc} />
              </li>
              <DeleteButton />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default connector(Profile);
