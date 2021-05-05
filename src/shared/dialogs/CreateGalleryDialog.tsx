import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { createGallery, saveArtwork } from "../../store/actions";
import { Gallery, State } from "../../store/types";

type Props = PropsFromRedux & {
  newGalleryDialogIsOpen: boolean;
  setNewGalleryDialogIsOpen: (open: boolean) => void;
  artworkID: string;
};

const mapStateToProps = (state: State) => ({
  //
});

const mapDispatchToProps = {
  saveArtwork,
  createGallery,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CreateGalleryDialog({
  newGalleryDialogIsOpen,
  setNewGalleryDialogIsOpen,
  artworkID,
  saveArtwork,
  createGallery,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCreateGallery = (searchTerm: string) => {
    createGallery(searchTerm);
    // saveArtwork(newGallery?)
    setNewGalleryDialogIsOpen(false);
  };

  let newGalleryDialog: JSX.Element | null = (
    <div className="dialog">
      <h2>Create new gallery</h2>
      <h3>Name</h3>
      <input
        type="text"
        placeholder="E.g. French Art, Cool Paintings"
        value={searchTerm}
        onChange={changeSearchTerm}
      />
      <button onClick={(event) => handleCreateGallery(searchTerm)}>
        Create new gallery
      </button>
      <button onClick={(event) => setNewGalleryDialogIsOpen(false)}>
        Close
      </button>
    </div>
  );

  if (!newGalleryDialogIsOpen) {
    newGalleryDialog = null;
  }

  return <div>{newGalleryDialog}</div>;
}

export default connector(CreateGalleryDialog);
