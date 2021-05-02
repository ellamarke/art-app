import { State } from "../../store/types";
import { saveArtwork } from "../../store/actions";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: State) => ({
  //
});

const mapDispatchToProps = {
  saveArtwork: saveArtwork,
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

function SaveButton({
  /* we pass in the things we want dispatched by redux here */
  saveArtwork,
  artworkID,
}: Props) {
  const gallery = "french art";
  return (
    <div className="save-button">
      <button onClick={(event) => saveArtwork(artworkID, gallery)}>save</button>
    </div>
  );
}

export default connector(SaveButton);
