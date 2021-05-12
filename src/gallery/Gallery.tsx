import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";
import { userGalleries } from "../reference/UserGalleries";
import SaveButton from "../shared/buttons/SaveButton";
import { changeActiveArtist } from "../store/actions";
import { State } from "../store/types";

const mapStateToProps = (state: State) => ({
  activeArtist: state.activeArtist,
  activeGalleryId: state.activeGalleryId,
});

const mapDispatchToProps = {
  changeActiveArtist,
};

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const connector = connect(mapStateToProps, mapDispatchToProps);

function Gallery({ activeGalleryId, activeArtist, changeActiveArtist }: Props) {
  const history = useHistory();

  function goToArtistPage(artistName: string) {
    console.log("I've been clicked!");
    changeActiveArtist(artistName);
    if (typeof activeArtist === "string") {
      history.push("/artist-page");
    }
  }

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
      {artworksInGallery?.map((artwork, index) => {
        return (
          <div key={index}>
            <h4 onClick={() => goToArtistPage(artwork.artistName)}>
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

export default connector(Gallery);
