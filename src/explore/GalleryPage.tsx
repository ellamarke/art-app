import { UserGalleryType } from "../reference/UserGalleries";
import { State } from "../store/types";
import { changeActiveGalleryId } from "../store/actions";
import { connect, ConnectedProps } from "react-redux";

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

function GalleryPage() {
  return <div></div>;
}

export default connector(GalleryPage);
