import React from "react";
import { picassoTimeline } from "../../reference/AllArtworks";
import SaveButton from "../../shared/buttons/SaveButton";
import SpotlightTimelineDescription from "./SpotlightTimelineDescription";
import { Parallax } from "react-scroll-parallax";

function ArtworkTimeline() {
  return (
    <div className="artwork-timeline">
      <h2 className="caps-headline-light">Artwork Timeline</h2>
      {picassoTimeline.map((artwork) => {
        return (
          <div className="artwork-object" key={artwork.id}>
            <Parallax className="date-parallax" y={[-20, 20]} tagOuter="figure">
              <p className="artwork-date">{artwork.date}</p>
            </Parallax>
            <img
              src={artwork.imgSrc}
              alt={artwork.artworkName}
              className="timeline-artwork"
            />
            <p className="caption">{artwork.artworkName}</p>
            <SaveButton artworkID={artwork.id} />
            <SpotlightTimelineDescription currentArtwork={artwork} />
          </div>
        );
      })}
    </div>
  );
}

export default ArtworkTimeline;
