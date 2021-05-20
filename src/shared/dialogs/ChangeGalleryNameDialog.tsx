import { connect, ConnectedProps } from "react-redux";
import { Gallery, State } from "../../store/types";
import { changeGalleryName } from "../../store/actions";
import { useState } from "react";

type Props = PropsFromRedux & {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  gallery: Gallery;
};

const mapStateToProps = (state: State) => ({
  //
});

const mapDispatchToProps = {
  changeGalleryName,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function ChangeGalleryNameDialog({
  isOpen,
  setIsOpen,
  changeGalleryName,
  gallery,
}: Props) {
  const [newGalleryName, setNewGalleryName] = useState(gallery.name);

  const handleChangeGalleryName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewGalleryName(event.target.value);
  };

  const handleUpdateGalleryName = (newGalleryName: string) => {
    changeGalleryName(newGalleryName, gallery.id);
    setIsOpen(false);
  };

  let changeGalleryNameDialog: JSX.Element | null = (
    <div className="dialog">
      <h2 className="dialog-heading small-dialog-heading">
        change gallery name
      </h2>
      <h3 className="dialog-subheading">New Name</h3>
      <input
        type="text"
        placeholder=""
        value={newGalleryName}
        onChange={handleChangeGalleryName}
        className="dialog-input"
      />
      <button
        onClick={(event) => handleUpdateGalleryName(newGalleryName)}
        className="main-dialog-button"
      >
        <p>Update gallery name</p>
      </button>
    </div>
  );

  if (!isOpen) {
    changeGalleryNameDialog = null;
  }

  return <div>{changeGalleryNameDialog}</div>;
}

export default connector(ChangeGalleryNameDialog);
