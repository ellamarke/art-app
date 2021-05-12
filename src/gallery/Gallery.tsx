import { connect, ConnectedProps } from "react-redux";
import { userGalleries, UserGalleryType } from "../reference/UserGalleries";
import { State } from "../store/types";

type Props = PropsFromRedux;

const mapStateToProps = (state: State) => ({
  activeGalleryId: state.activeGalleryId,
});

const mapDispatchToProps = {
  //
};

type PropsFromRedux = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps, mapDispatchToProps);

function Gallery({ activeGalleryId }: Props) {
  const activeGallery = userGalleries.find((gallery) => {
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
      <h1>{activeGallery.galleryName}</h1>
    </div>
  );
}

export default connector(Gallery);
