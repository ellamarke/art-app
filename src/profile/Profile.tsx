import { Artwork, Gallery, State } from "../store/types";
import { connect, ConnectedProps } from "react-redux";
import DeleteButton from "../shared/buttons/DeleteButton";
import { allArtworks, ArtworkTimelineType } from "../reference/AllArtworks";
import DeleteGalleryButton from "../shared/buttons/DeleteGalleryButton";
import ChangeGalleryNameButton from "../shared/buttons/ChangeGalleryNameButton";

const mapStateToProps = (state: State) => ({
  artworks: state.savedArtworks,
  savedGalleries: state.savedGalleries,
});

const mapDispatchToProps = {
  //
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
); /* this connects the component to the store */

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  artworks: Artwork[];
  savedGalleries: Gallery[];
};

type GalleryProps = {
  artworks: Artwork[];
};

function Profile({ artworks, savedGalleries }: Props) {
  return (
    <div>
      <h1>Profile</h1>
      {savedGalleries.map((gallery) => {
        return (
          <div>
            <h2>{gallery.name}</h2>
            <DeleteGalleryButton galleryName={gallery.name} />
            <ChangeGalleryNameButton gallery={gallery} />
            <ArtworksInGallery
              artworks={getArtworksInGallery(artworks, gallery)}
            />
          </div>
        );
      })}
    </div>
  );
}

function getArtworksInGallery(
  allArtworks: Artwork[],
  gallery: Gallery
): Artwork[] {
  return allArtworks.filter((artwork) => gallery.id === artwork.gallery);
}

function ArtworksInGallery({ artworks }: GalleryProps) {
  return (
    <div>
      {artworks.map((savedArtwork) => {
        const artwork = allArtworks.find((artwork) => {
          return artwork.id === savedArtwork.id;
        }) as ArtworkTimelineType;
        return (
          <div key={artwork.id}>
            <p>
              {artwork.artistName}, {artwork.artworkName}
            </p>
            <p>
              <img src={artwork.imgSrc} alt={artwork.artworkName} />
            </p>
            <DeleteButton artworkID={artwork.id} />
          </div>
        );
      })}
    </div>
  );
}

export default connector(Profile);
