import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { ArtworkDetailsType } from "../reference/AllArtworks";
import { userGalleries, UserGalleryType } from "../reference/UserGalleries";
import { Artwork, State } from "../store/types";

const mapStateToProps = (state: State) => ({
  activeGalleryId: state.activeGalleryId,
});

const mapDispatchToProps = {
  //
};

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

const connector = connect(mapStateToProps, mapDispatchToProps);

function Gallery({ activeGalleryId }: Props) {
  const activeGallery = userGalleries.find((gallery) => {
    return gallery.id === activeGalleryId;
  });

  const artworksInGallery = activeGallery?.gallery;

  if (typeof activeGallery === "undefined") {
    return (
      <div>
        <h1>Could not find gallery</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{activeGallery.galleryName}</h1>
      {artworksInGallery?.map((artwork) => {
        return (
          <div key={artwork.id}>
            <h4>
              {artwork.artworkName}, {artwork.artistName}
            </h4>
            <img src={artwork.imgSrc} />
          </div>
        );
      })}
    </div>
  );
}

export default connector(Gallery);
