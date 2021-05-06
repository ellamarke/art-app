import { ArtworkTimelineType } from "../reference/AllArtworks";

type Props = {
  currentArtwork: ArtworkTimelineType;
};
function SpotlightTimelineDescription({ currentArtwork }: Props) {
  let spotlightTimelineDescription = "";

  if (currentArtwork.spotlightPicture) {
    spotlightTimelineDescription =
      "This is the spotlighted work. It is very special";
  }

  return (
    <div>
      <p>{spotlightTimelineDescription}</p>
    </div>
  );
}

export default SpotlightTimelineDescription;
