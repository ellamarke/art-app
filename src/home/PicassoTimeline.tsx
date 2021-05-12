import ArtworkSpotlight from "./artwork-timeline/ArtworkSpotlight";
import { picassoTimeline } from "../reference/AllArtworks";

function PicassoTimeline() {
  const picassoSpotlight = picassoTimeline.find((artwork) => {
    return artwork.spotlightPicture;
  });

  if (picassoSpotlight !== undefined) {
    return (
      <div>
        <ArtworkSpotlight
          imgSrc={picassoSpotlight.imgSrc}
          artworkName={picassoSpotlight.artworkName}
          artistName={picassoSpotlight.artistName}
          date={picassoSpotlight.date}
          description={picassoSpotlight?.description}
          id={picassoSpotlight.id}
          spotlightPicture={picassoSpotlight.spotlightPicture}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default PicassoTimeline;
