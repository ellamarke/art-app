import { State } from "../../store/types";
import { removeArtwork } from "../../store/actions";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: State) => ({
  //
});

const mapDispatchToProps = {
  removeArtwork: removeArtwork,
  /* this dispatches things on our behalf */
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
); /* this connects the component to the store */

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  artworkID: string;
};

function DeleteButton({
  /* we pass in the things we want dispatched by redux here */
  removeArtwork,
  artworkID,
}: Props) {
  const gallery = "french art";
  return (
    <div className="delete-button">
      <button onClick={(event) => removeArtwork(artworkID, gallery)}>
        delete
      </button>
    </div>
  );
}

export default connector(DeleteButton);
