import { ArtworkGalleryLink, Gallery, State } from "../store/types";
import { changeActiveGalleryId, removeArtwork } from "../store/actions";
import { connect, ConnectedProps } from "react-redux";
import React, { useState } from "react";
import { allArtworks } from "../reference/AllArtworks";
import { ArtworkDetails } from "../store/types";
import DeleteDialog from "../shared/dialogs/DeleteDialog";
import DeleteButton from "../shared/buttons/DeleteButton";

type Props = PropsFromRedux;

const mapStateToProps = (state: State) => ({
  activeGalleryId: state.activeGalleryId,
  savedGalleries: state.savedGalleries,
  savedArtworks: state.savedArtworks,
});

const mapDispatchToProps = {
  changeActiveGalleryId,
  removeArtwork: removeArtwork,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function GalleryPage({
  activeGalleryId,
  savedGalleries,
  savedArtworks,
  removeArtwork,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

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
              <DeleteButton artworkID={artwork.id} />
            </div>
          );
        })}
    </div>
  );
}

function getArtworksInGallery(
  savedArtworks: ArtworkGalleryLink[],
  gallery: Gallery
): ArtworkGalleryLink[] {
  return savedArtworks.filter((artwork) => gallery.id === artwork.gallery);
}

function getArtwork(id: string): ArtworkDetails {
  const artwork = allArtworks.find((artwork) => {
    return artwork.id === id;
  }) as ArtworkDetails;
  return artwork;
}

export default connector(GalleryPage);
