import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { addGalleryDescription } from "../../store/actions";
import { State } from "../../store/types";

type Props = PropsFromRedux & {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  galleryId: string;
};

const mapStateToProps = (state: State) => ({
  savedGalleries: state.savedGalleries,
});

const mapDispatchToProps = {
  addGalleryDescription,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddGalleryDescriptionDialog({
  isOpen,
  setIsOpen,
  galleryId,
  addGalleryDescription,
}: Props) {
  const [galleryDescription, setGalleryDescription] = useState("");

  const changeGalleryDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGalleryDescription(event.target.value);
  };

  const handleAddDescription = (galleryDescription: string) => {
    addGalleryDescription(galleryDescription, galleryId);
  };

  let newGalleryDescriptionDialog: JSX.Element | null = (
    <div className="dialog">
      <h2>Add a gallery description</h2>
      <input
        type="text"
        placeholder="E.g. This is my gallery of French Art. It includes artists from the 16th to 20th centuries"
        value={galleryDescription}
        onChange={changeGalleryDescription}
      />
      <button onClick={(event) => handleAddDescription(galleryDescription)}>
        Add description
      </button>
      <button onClick={(event) => setIsOpen(false)}>Close</button>
    </div>
  );

  if (!isOpen) {
    newGalleryDescriptionDialog = null;
  }

  return <div>{newGalleryDescriptionDialog}</div>;
}

export default connector(AddGalleryDescriptionDialog);
