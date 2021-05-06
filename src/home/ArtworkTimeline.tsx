import React from "react";
import { picassoTimeline } from "../reference/AllArtworks";
import SaveButton from "../shared/buttons/SaveButton";
import SpotlightTimelineDescription from "./SpotlightTimelineDescription";

function ArtworkTimeline() {
  return (
    <div className="artwork-timeline">
      <h2>Artwork Timeline</h2>
      {picassoTimeline.map((artwork) => {
        return (
          <div className="artwork-object" key={artwork.id}>
            <p className="artwork-date">{artwork.date}</p>
            <img src={artwork.imgSrc} alt={artwork.artworkName} />
            <p className="artwork-name">{artwork.artworkName}</p>
            <SaveButton artworkID={artwork.id} />
            <SpotlightTimelineDescription currentArtwork={artwork} />
          </div>
        );
      })}
    </div>
  );
}

export default ArtworkTimeline;
