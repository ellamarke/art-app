import { ArtworkGalleryLink, Gallery, State } from "../store/types";
import { connect, ConnectedProps } from "react-redux";
import DeleteButton from "../shared/dialogs/DeleteDialog";
import { allArtworks } from "../reference/AllArtworks";
import { useHistory } from "react-router-dom";
import { changeActiveGalleryId } from "../store/actions";
import { UserGalleryType } from "../reference/UserGalleries";
import { ArtworkDetails } from "../store/types";

const mapStateToProps = (state: State) => ({
  artworks: state.savedArtworks,
  savedGalleries: state.savedGalleries,
  activeGalleryId: state.activeGalleryId,
});

const mapDispatchToProps = {
  changeActiveGalleryId,
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
); /* this connects the component to the store */

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  artworks: ArtworkGalleryLink[];
  savedGalleries: Gallery[];
  userGallery: UserGalleryType;
};

type GalleryProps = {
  artworks: ArtworkGalleryLink[];
};

function Profile({
  artworks,
  savedGalleries,
  changeActiveGalleryId,
  activeGalleryId,
}: Props) {
  const history = useHistory();

  function goToSavedGallery(id: string) {
    changeActiveGalleryId(id);
    if (typeof activeGalleryId === "string") {
      history.push("/gallery-page");
    }

    console.log("Clicked!");
  }
  return (
    <div className="profile">
      {savedGalleries.map((gallery) => {
        const artworksInGallery = getArtworksInGallery(artworks, gallery);
        return (
          <div
            key={gallery.id}
            className="card saved-galleries"
            onClick={() => goToSavedGallery(gallery.id)}
          >
            <img src="img/black-arrow.svg" alt="arrow" className="arrow" />
            <h3 className="card-heading">{gallery.name}</h3>
            <div className="trending-gallery-grid">
              {artworksInGallery
                .filter((artwork, index) => {
                  return index < 4;
                })
                .map((artwork) => {
                  const artworkDetails = getArtwork(artwork.id);
                  return (
                    <img
                      className="artwork"
                      key={artworkDetails.id}
                      src={artworkDetails.imgSrc}
                      alt={artworkDetails.artworkName}
                    />
                  );
                })}
            </div>
            <p className="username">{artworksInGallery.length} artworks</p>
          </div>
        );
      })}
    </div>
  );
}

function getArtworksInGallery(
  allArtworks: ArtworkGalleryLink[],
  gallery: Gallery
): ArtworkGalleryLink[] {
  return allArtworks.filter((artwork) => gallery.id === artwork.gallery);
}

function ArtworksInGallery({ artworks }: GalleryProps) {
  return (
    <div>
      {artworks.map((savedArtwork, index) => {
        const artwork = getArtwork(savedArtwork.id);
        return (
          <div key={index}>
            <p>
              {artwork.artistName}, {artwork.artworkName}
            </p>
            <p>
              <img src={artwork.imgSrc} alt={artwork.artworkName} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

function getArtwork(id: string): ArtworkDetails {
  const artwork = allArtworks.find((artwork) => {
    return artwork.id === id;
  }) as ArtworkDetails;
  return artwork;
}

export default connector(Profile);
