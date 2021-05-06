import React, { useState } from "react";
import SaveButton from "../shared/buttons/SaveButton";
import ArtworkTimeline from "./ArtworkTimeline";
import { ArtworkTimelineType } from "../reference/AllArtworks";

function ArtworkSpotlight({
  imgSrc,
  artistName,
  artworkName,
  date,
  description,
  id,
}: ArtworkTimelineType) {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    if (seeMore === false) {
      setSeeMore(true);
    } else {
      setSeeMore(false);
    }
  };
  return (
    <div className="artwork-spotlight">
      <h2>Artwork Spotlight</h2>
      <img src={imgSrc} alt={artworkName} />
      <SaveButton artworkID={id} />
      <div className="artworkHeading">
        <h3>{artworkName}</h3>
        <p>
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

export default ArtworkSpotlight;
