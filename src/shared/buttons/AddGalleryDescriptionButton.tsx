import { useState } from "react";
import AddGalleryDescriptionDialog from "../dialogs/AddGalleryDescriptionDialog";

type Props = {
  galleryId: string;
};

function AddGalleryDescriptionButton({ galleryId }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="save-button">
        <button onClick={() => setIsOpen(true)}>Add a description</button>
      </div>
      <AddGalleryDescriptionDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        galleryId={galleryId}
      />
    </div>
  );
}

export default AddGalleryDescriptionButton;
