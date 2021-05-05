import { Gallery, State } from "../../store/types";
import { connect, ConnectedProps } from "react-redux";
import { saveArtwork } from "../../store/actions";

type Props = PropsFromRedux & {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  newGalleryDialogIsOpen: boolean;
  setNewGalleryDialogIsOpen: (open: boolean) => void;
  savedGalleries: Gallery[];
  artworkID: string;
};

const mapStateToProps = (state: State) => ({
  savedGalleries: state.savedGalleries,
});

const mapDispatchToProps = {
  saveArtwork: saveArtwork,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function GalleryDialog({
  isOpen,
  setIsOpen,
  newGalleryDialogIsOpen,
  setNewGalleryDialogIsOpen,
  savedGalleries,
  artworkID,
  saveArtwork,
}: Props) {
  const onClick = (artworkID: string, galleryId: string) => {
    console.log("clicked saved");
    saveArtwork(artworkID, galleryId);
    setIsOpen(false);
  };

  const newGallery = () => {
    setIsOpen(false);
    setNewGalleryDialogIsOpen(true);
  };

  let galleryDialog: JSX.Element | null = (
    <div className="dialog">
      <h2>Save to gallery</h2>
      <ul>
        {savedGalleries.map((gallery) => {
          return (
            <li onClick={(event) => onClick(artworkID, gallery.id)}>
              {gallery.name}
            </li>
          );
        })}
      </ul>
      <button onClick={newGallery}>Create new gallery</button>
      <button onClick={(event) => setIsOpen(false)}>Close</button>
    </div>
  );

  if (!isOpen) {
    galleryDialog = null;
  }

  return <div>{galleryDialog}</div>;
}

export default connector(GalleryDialog);
