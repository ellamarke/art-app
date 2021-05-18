import { State } from "../../store/types";
import { saveArtwork } from "../../store/actions";
import { connect, ConnectedProps } from "react-redux";
import GalleryDialog from "../dialogs/GalleryDialog";
import { useState } from "react";
import CreateGalleryDialog from "../dialogs/CreateGalleryDialog";
import AddIcon from "@material-ui/icons/Add";

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

function SaveButtonMini({
  /* we pass in the things we want dispatched by redux here */
  saveArtwork,
  artworkID,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [newGalleryDialogIsOpen, setNewGalleryDialogIsOpen] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setIsOpen(true)} className="save-button-mini">
          {<AddIcon className="symbol" />}
        </button>
      </div>
      <GalleryDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        artworkID={artworkID}
        newGalleryDialogIsOpen={newGalleryDialogIsOpen}
        setNewGalleryDialogIsOpen={setNewGalleryDialogIsOpen}
      />
      <CreateGalleryDialog
        newGalleryDialogIsOpen={newGalleryDialogIsOpen}
        setNewGalleryDialogIsOpen={setNewGalleryDialogIsOpen}
        artworkID={artworkID}
      />
    </div>
  );
}

export default connector(SaveButtonMini);
