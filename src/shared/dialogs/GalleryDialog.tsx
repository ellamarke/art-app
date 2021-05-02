import { Gallery, State } from "../../store/types";
import { connect, ConnectedProps } from "react-redux";
import { saveArtwork } from "../../store/actions";

type Props = PropsFromRedux & {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  premadeGalleries: Gallery[];
  artworkID: string;
};

const mapStateToProps = (state: State) => ({
  premadeGalleries: state.premadeGalleries,
});

const mapDispatchToProps = {
  saveArtwork: saveArtwork,
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
); /* this connects the component to the store */

type PropsFromRedux = ConnectedProps<typeof connector>;

function GalleryDialog({
  isOpen,
  setIsOpen,
  premadeGalleries,
  artworkID,
  saveArtwork,
}: Props) {
  const onClick = (artworkID: string, galleryId: string) => {
    console.log("clicked saved");
    saveArtwork(artworkID, galleryId);
    setIsOpen(false);
  };

  let galleryDialog: JSX.Element | null = (
    <div className="dialog">
      <h2>Save to gallery</h2>
      <ul>
        {premadeGalleries.map((gallery) => {
          return (
            <li onClick={(event) => onClick(artworkID, gallery.id)}>
              {gallery.name}
            </li>
          );
        })}
      </ul>
      <button onClick={(event) => setIsOpen(false)}>Close</button>
    </div>
  );

  if (!isOpen) {
    galleryDialog = null;
  }

  return <div>{galleryDialog}</div>;
}

export default connector(GalleryDialog);
