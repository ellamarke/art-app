import { Artwork, State } from "../store/types";
import { connect, ConnectedProps } from "react-redux";

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
        {artworks.map((artwork) => (
          <li>{artwork.gallery}</li>
        ))}
      </ul>
    </div>
  );
}

export default connector(Profile);
