import { State } from "../../store/types";
import { removeGallery } from "../../store/actions";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: State) => ({
  //
});

const mapDispatchToProps = {
  removeGallery,
  /* this dispatches things on our behalf */
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
); /* this connects the component to the store */

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  galleryName: string;
};
function DeleteGalleryButton({ removeGallery, galleryName }: Props) {
  return (
    <div className="delete-button">
      <button onClick={(event) => removeGallery(galleryName)}>
        Delete {galleryName}
      </button>
    </div>
  );
}

export default connector(DeleteGalleryButton);
