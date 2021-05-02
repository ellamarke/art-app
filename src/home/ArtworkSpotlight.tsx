import React from "react";
import SaveButton from "../shared/buttons/SaveButton";
import ArtworkTimeline from "./ArtworkTimeline";
import { ArtworkTimelineType } from "../reference/AllArtworks";

type Timeline = {
  dates: number[];
  imgSRCs: string[];
  artworkNames: string[];
};

function ArtworkSpotlight({
  imgSrc,
  artistName,
  artworkName,
  date,
  description,
  id,
}: ArtworkTimelineType) {
  return (
    <div className="artwork-spotlight">
      <h2>Artwork Spotlight</h2>
      <img src={imgSrc} />
      <SaveButton artworkID={id} />
      <div className="artworkHeading">
        <h3>{artworkName}</h3>
        <p>
          {artistName}, {date}
        </p>
      </div>
      <p>{description}</p>
      <ArtworkTimeline />
    </div>
  );
}

export default ArtworkSpotlight;
