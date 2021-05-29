import { State } from "../../store/types";
import { removeArtwork } from "../../store/actions";
import { connect, ConnectedProps } from "react-redux";
import { useState } from "react";
import DeleteDialog from "../dialogs/DeleteDialog";

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

function DeleteButton({ removeArtwork, artworkID }: Props) {
  console.log("Ive been called");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="delete-button">
        <button onClick={() => setIsOpen(true)}>
          <img
            src="img/yellow-bin-thick.svg"
            alt="bin"
            className="symbol bin-symbol"
          />
          <p>delete</p>
        </button>
      </div>
      <DeleteDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        artworkID={artworkID}
      />
    </div>
  );
}

export default connector(DeleteButton);
