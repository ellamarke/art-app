import { Gallery, State } from "../../store/types";
import { connect, ConnectedProps } from "react-redux";
import { saveArtwork } from "../../store/actions";

function CreateGallery() {
  /*  const mapStateToProps = (state: State) => ({
    savedGalleries: state.savedGalleries,
  });

  const mapDispatchToProps = {
    saveArtwork: saveArtwork,
  };

  const connector = connect(mapStateToProps, mapDispatchToProps);

  const anotherGallery = JSON.parse(JSON.stringify(newGallery)); 
  savedGalleries.push(anotherGallery); 

  setState({ ...state, savedGalleries, currentGallery: anotherGallery });  */
}

export default CreateGallery;
