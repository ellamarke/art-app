import React from "react";
import SaveButton from "../shared/buttons/SaveButton";
import ArtworkTimeline from "./ArtworkTimeline";

type ArtworkSpotlight = {
  imgSRC: string;
  artworkName: string;
  artistName?: string;
  created?: number;
  description?: string;
  timeline?: Timeline;
};

type Timeline = {
  dates: number[];
  imgSRCs: string[];
  artworkNames: string[];
};

function ArtworkSpotlight({
  imgSRC,
  artistName,
  artworkName,
  created,
  description,
  timeline,
}: ArtworkSpotlight) {
  return (
    <div className="artwork-spotlight">
      <h2>Artwork Spotlight</h2>
      <img src={imgSRC} />
      <SaveButton />
      <div className="artworkHeading">
        <h3>{artworkName}</h3>
        <p>
          {artistName}, {created}
        </p>
      </div>
      <p>{description}</p>
      <ArtworkTimeline />
    </div>
  );
}

export default ArtworkSpotlight;
