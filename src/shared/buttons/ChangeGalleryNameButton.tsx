import { Gallery, State } from "../../store/types";
import { changeGalleryName } from "../../store/actions";
import { connect, ConnectedProps } from "react-redux";
import { useState } from "react";
import ChangeGalleryNameDialog from "../dialogs/ChangeGalleryNameDialog";

const mapStateToProps = (state: State) => ({
  //
});

const mapDispatchToProps = {
  changeGalleryName,
  /* this dispatches things on our behalf */
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
); /* this connects the component to the store */

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  gallery: Gallery;
};

function SaveButton({
  /* we pass in the things we want dispatched by redux here */
  changeGalleryName,
  gallery,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="save-button">
        <button onClick={(event) => setIsOpen(true)}>
          Change gallery name
        </button>
      </div>
      <ChangeGalleryNameDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        gallery={gallery}
      />
    </div>
  );
}

export default connector(SaveButton);
