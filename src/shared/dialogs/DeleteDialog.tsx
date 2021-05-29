import { State } from "../../store/types";
import { removeArtwork } from "../../store/actions";
import { connect, ConnectedProps } from "react-redux";
import DetectClickOutside from "./DetectClickOutside";

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
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

function DeleteDialog({ removeArtwork, artworkID, isOpen, setIsOpen }: Props) {
  console.log("Ive been called");

  if (!isOpen) {
    return null;
  }
  const { ref } = DetectClickOutside<HTMLDivElement>(() => {
    console.log("clicked outside");
    setIsOpen(false);
  });

  function deleteAndClose() {
    console.log("clicked inside");
    removeArtwork(artworkID);
    setIsOpen(false);
  }

  let deleteDialog: JSX.Element | null = (
    <div className="dialog">
      <h2 className="dialog-heading">are you sure?</h2>
      <p className="dialog-input">
        Once deleted, you cannot get your artwork back.
      </p>
      <button
        onClick={(event) => deleteAndClose()}
        className="main-dialog-button"
      >
        delete anyway
      </button>
    </div>
  );

  return <div ref={ref}>{deleteDialog}</div>;
}

export default connector(DeleteDialog);
