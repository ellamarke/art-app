import React from "react";
import { UserGalleryType } from "../../reference/UserGalleries";
import { State } from "../../store/types";
import { changeActiveGalleryId } from "../../store/actions";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";

type Props = PropsFromRedux & {
  userGallery: UserGalleryType;
};

const mapStateToProps = (state: State) => ({
  activeGalleryId: state.activeGalleryId,
});

const mapDispatchToProps = {
  changeActiveGalleryId,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function TrendingGallery({
  userGallery,
  changeActiveGalleryId,
  activeGalleryId,
}: Props) {
  const history = useHistory();
  function goToGallery() {
    changeActiveGalleryId(userGallery.id);
    if (typeof activeGalleryId === "string") {
      history.push("/gallery");
    }

    console.log("Clicked!");
  }

  return (
    <div className="trending-gallery section" onClick={goToGallery}>
      <h2>trending gallery</h2>
      <div className="card">
        <img src="img/black-arrow.svg" alt="" className="arrow" />
        <h3 className="card-heading">{userGallery.galleryName}</h3>
        <div className="trending-gallery-grid">
          {userGallery.gallery
            .filter((artwork) => {
              return artwork.spotlightPicture;
            })
            .map((artwork) => {
              return (
                <img
                  className="artwork"
                  key={artwork.id}
                  src={artwork.imgSrc}
                  alt={artwork.artworkName}
                />
              );
            })}
        </div>
        <h4 className="username">{userGallery.username}</h4>
      </div>
    </div>
  );
}

export default connector(TrendingGallery);
