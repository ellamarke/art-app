import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { addGalleryDescription } from "../../store/actions";
import { State } from "../../store/types";
import DetectClickOutside from "./DetectClickOutside";

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
  const { ref } = DetectClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });
  const [galleryDescription, setGalleryDescription] = useState("");

  const changeGalleryDescription = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setGalleryDescription(event.target.value);
  };

  const handleAddDescription = (galleryDescription: string) => {
    addGalleryDescription(galleryDescription, galleryId);
    setIsOpen(false);
  };

  let newGalleryDescriptionDialog: JSX.Element | null = (
    <div className="dialog">
      <h2 className="dialog-heading smallest-dialog-heading">
        Add a gallery description
      </h2>
      <textarea
        placeholder="E.g. 'This is my gallery of French Art. It includes artists from the 16th to 20th centuries'"
        value={galleryDescription}
        onChange={changeGalleryDescription}
        className="dialog-input text-area"
      />
      <button
        onClick={(event) => handleAddDescription(galleryDescription)}
        className="main-dialog-button"
      >
        <p>Add description</p>
      </button>
    </div>
  );

  if (!isOpen) {
    newGalleryDescriptionDialog = null;
  }

  return <div ref={ref}>{newGalleryDescriptionDialog}</div>;
}

export default connector(AddGalleryDescriptionDialog);
