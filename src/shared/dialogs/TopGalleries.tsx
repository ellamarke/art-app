import { Artwork, Gallery, State } from "../../store/types";
import { connect, ConnectedProps } from "react-redux";
import DeleteGalleryButton from "../../shared/buttons/DeleteGalleryButton";
import ChangeGalleryNameButton from "../../shared/buttons/ChangeGalleryNameButton";
import AddGalleryDescriptionButton from "../../shared/buttons/AddGalleryDescriptionButton";

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

function TopGalleries({ artworks, savedGalleries }: Props) {
  return (
    <div>
      <h1>Profile</h1>
      {savedGalleries.map((gallery) => {
        return (
          <div key={gallery.id}>
            <h2>{gallery.name}</h2>
            <DeleteGalleryButton galleryName={gallery.name} />
            <ChangeGalleryNameButton gallery={gallery} />
            <AddGalleryDescriptionButton galleryId={gallery.id} />
            <p>{gallery.description}</p>
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

export default connector(TopGalleries);
