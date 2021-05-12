import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { changeActiveArtist } from "../../store/actions";
import SaveButton from "../../shared/buttons/SaveButton";
import ArtworkTimeline from "./ArtworkTimeline";
import { ArtworkDetailsType } from "../../reference/AllArtworks";
import { useHistory } from "react-router-dom";
import { State } from "../../store/types";

const mapStateToProps = (state: State) => ({
  activeArtist: state.activeArtist,
});

const mapDispatchToProps = {
  changeActiveArtist,
};

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & ArtworkDetailsType;

const connector = connect(mapStateToProps, mapDispatchToProps);

function ArtworkSpotlight({
  imgSrc,
  artistName,
  artworkName,
  date,
  description,
  id,
  activeArtist,
  changeActiveArtist,
}: Props) {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    if (seeMore === false) {
      setSeeMore(true);
    } else {
      setSeeMore(false);
    }
  };
  const history = useHistory();
  function goToArtistPage(artistName: string) {
    console.log("I've been clicked!");
    changeActiveArtist(artistName);
    if (typeof activeArtist === "string") {
      history.push("/artist-page");
    }
  }
  return (
    <div className="artwork-spotlight">
      <h2>Artwork Spotlight</h2>
      <img src={imgSrc} alt={artworkName} />
      <SaveButton artworkID={id} />
      <div className="artworkHeading">
        <h3>{artworkName}</h3>
        <p onClick={() => goToArtistPage(artistName)}>
          {artistName}, {date}
        </p>
      </div>
      <p>{description}</p>
      <button onClick={handleSeeMore}>
        {seeMore ? "See less" : "See more"}
      </button>
      {seeMore ? <ArtworkTimeline /> : null}
    </div>
  );
}

export default connector(ArtworkSpotlight);
