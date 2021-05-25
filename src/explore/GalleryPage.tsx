import { Artwork, Gallery, State } from "../store/types";
import { changeActiveGalleryId } from "../store/actions";
import { connect, ConnectedProps } from "react-redux";
import React from "react";
import SaveButton from "../shared/buttons/SaveButton";
import { allArtworks, ArtworkDetailsType } from "../reference/AllArtworks";

type Props = PropsFromRedux;

const mapStateToProps = (state: State) => ({
  activeGalleryId: state.activeGalleryId,
  savedGalleries: state.savedGalleries,
  savedArtworks: state.savedArtworks,
});

const mapDispatchToProps = {
  changeActiveGalleryId,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function GalleryPage({
  activeGalleryId,
  savedGalleries,
  savedArtworks,
}: Props) {
  const activeGallery = savedGalleries.find((gallery) => {
    return gallery.id === activeGalleryId;
  });

  if (typeof activeGallery === "undefined") {
    return (
      <div>
        <h1>Could not find gallery</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{activeGallery.name}</h1>
      {getArtworksInGallery(savedArtworks, activeGallery)
        .map((artwork) => {
          return getArtwork(artwork.id);
        })
        .map((artwork, index) => {
          return (
            <div key={index}>
              <h4>
                {artwork.artworkName}, {artwork.artistName}
              </h4>
              <img src={artwork.imgSrc} alt={artwork.artworkName} />
              <SaveButton artworkID={artwork.id} />
            </div>
          );
        })}
    </div>
  );
}

function getArtworksInGallery(
  savedArtworks: Artwork[],
  gallery: Gallery
): Artwork[] {
  return savedArtworks.filter((artwork) => gallery.id === artwork.gallery);
}

function getArtwork(id: string): ArtworkDetailsType {
  const artwork = allArtworks.find((artwork) => {
    return artwork.id === id;
  }) as ArtworkDetailsType;
  return artwork;
}

export default connector(GalleryPage);
