import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { createGallery, saveArtwork } from "../../store/actions";
import { State } from "../../store/types";
import DetectClickOutside from "./DetectClickOutside";

type Props = PropsFromRedux & {
  newGalleryDialogIsOpen: boolean;
  setNewGalleryDialogIsOpen: (open: boolean) => void;
  artworkID: string;
};

const mapStateToProps = (state: State) => ({
  savedGalleries: state.savedGalleries,
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
  savedGalleries,
}: Props) {
  const { ref } = DetectClickOutside<HTMLDivElement>(() => {
    setNewGalleryDialogIsOpen(false);
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [newGallery, setNewGallery] = useState(false);

  const changeSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (newGallery) {
      const newGallery = savedGalleries.find(
        (gallery) => searchTerm === gallery.name
      );

      if (typeof newGallery !== "object") {
        throw TypeError("The gallery does not exist!");
      }
      saveArtwork(artworkID, newGallery.id);
      setNewGalleryDialogIsOpen(false);
    }
  }, [
    savedGalleries,
    saveArtwork,
    setNewGalleryDialogIsOpen,
    newGallery,
    artworkID,
    searchTerm,
  ]);

  // We've dispatched something to change the store and the thing we want to do just afterwards depends on that store change
  // That's why we need an if statement (triggered by useState) to determine if a new gallery has been created yet

  const handleCreateGallery = (searchTerm: string) => {
    createGallery(searchTerm);
    setNewGallery(true);
  };

  let newGalleryDialog: JSX.Element | null = (
    <div className="dialog">
      <h2 className="dialog-heading">Create new gallery</h2>
      <h3 className="dialog-subheading">Name</h3>
      <input
        type="text"
        placeholder="E.g. 'Modernist Paintings'"
        value={searchTerm}
        onChange={changeSearchTerm}
        className="dialog-input"
      />
      <button
        onClick={(event) => handleCreateGallery(searchTerm)}
        className="main-dialog-button"
      >
        <p>Create new gallery</p>
      </button>
    </div>
  );

  if (!newGalleryDialogIsOpen) {
    newGalleryDialog = null;
  }

  return <div ref={ref}>{newGalleryDialog}</div>;
}

export default connector(CreateGalleryDialog);
