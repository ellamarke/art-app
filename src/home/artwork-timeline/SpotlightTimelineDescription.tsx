import { ArtworkDetailsType } from "../../reference/AllArtworks";

type Props = {
  currentArtwork: ArtworkDetailsType;
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
