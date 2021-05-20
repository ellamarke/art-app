import { Gallery, State } from "../../store/types";
import { connect, ConnectedProps } from "react-redux";
import { saveArtwork } from "../../store/actions";
import DetectClickOutside from "./DetectClickOutside";

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
  const { ref } = DetectClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

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
      <h2 className="dialog-heading">save to gallery</h2>
      <div className="dialog-scroll">
        <h3 className="dialog-subheading">Your top galleries</h3>
        <ul></ul>
        <h3 className="dialog-subheading">All galleries</h3>
        <ul>
          {savedGalleries.sort(sortAlphabetically).map((gallery, index) => {
            return (
              <li
                onClick={(event) => onClick(artworkID, gallery.id)}
                key={index}
                className="dialog-item"
              >
                <p className="dialog-item-text">{gallery.name}</p>
                <div className="img-container">
                  <img
                    src="img/black-cross.svg"
                    alt="save button"
                    className="symbol"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={newGallery} className="main-dialog-button">
        <p> Create new gallery</p>
      </button>
    </div>
  );

  if (!isOpen) {
    galleryDialog = null;
  }

  return <div ref={ref}>{galleryDialog}</div>;
}

export default connector(GalleryDialog);
