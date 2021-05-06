import { picassoTimeline } from "../reference/AllArtworks";
import SaveButton from "../shared/buttons/SaveButton";

function ArtworkTimeline() {
  return (
    <div className="artwork-timeline">
      <h3>Artwork Timeline</h3>
      {picassoTimeline.map((artwork) => {
        return (
          <div className="artwork-object">
            <p className="artwork-date">{artwork.date}</p>
            <img src={artwork.imgSrc} />
            <p className="artwork-name">{artwork.artworkName}</p>
            <SaveButton artworkID={artwork.id} />
            {/*             <SpotlightTimelineDescription /> */}
          </div>
        );
      })}
    </div>
  );
}

export default ArtworkTimeline;
