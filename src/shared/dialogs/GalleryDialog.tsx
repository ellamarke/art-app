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

  const sortAlphabetically = (gallery1: Gallery, gallery2: Gallery) => {
    if (gallery1.name < gallery2.name) {
      return -1;
    }
    if (gallery1.name > gallery2.name) {
      return 1;
    }
    return 0;
  };

  let galleryDialog: JSX.Element | null = (
    <div className="dialog">
      <h2>Save to gallery</h2>
      <h3>Your top galleries</h3>
      <ul></ul>
      <h3>All galleries</h3>
      <ul>
        {savedGalleries.sort(sortAlphabetically).map((gallery) => {
          return (
            <li
              onClick={(event) => onClick(artworkID, gallery.id)}
              key={artworkID}
            >
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
