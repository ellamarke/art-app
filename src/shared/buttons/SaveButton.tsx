import { State } from "../../store/types";
import { createGallery, saveArtwork } from "../../store/actions";
import { connect, ConnectedProps } from "react-redux";
import GalleryDialog from "../dialogs/GalleryDialog";
import { useState } from "react";
import CreateGalleryDialog from "../dialogs/CreateGalleryDialog";

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
  const [isOpen, setIsOpen] = useState(false);
  const [newGalleryDialogIsOpen, setNewGalleryDialogIsOpen] = useState(false);
  return (
    <div>
      <div className="save-button">
        <button onClick={(event) => setIsOpen(true)}>save</button>
      </div>
      <GalleryDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        artworkID={artworkID}
        newGalleryDialogIsOpen={newGalleryDialogIsOpen}
        setNewGalleryDialogIsOpen={setNewGalleryDialogIsOpen}
      />
      <CreateGalleryDialog // why do we pass all this in? what does it mean?
        newGalleryDialogIsOpen={newGalleryDialogIsOpen}
        setNewGalleryDialogIsOpen={setNewGalleryDialogIsOpen}
        artworkID={artworkID}
      />
    </div>
  );
}

export default connector(SaveButton);
