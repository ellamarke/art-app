import { ArtworkDetails } from "../../store/types";

type Props = {
  currentArtwork: ArtworkDetails;
};
function SpotlightTimelineDescription({ currentArtwork }: Props) {
  let spotlightTimelineDescription = "";

  if (currentArtwork.spotlightPicture) {
    spotlightTimelineDescription =
      "Femme au Beret Orange was painted in 1937, just before Picasso’s more political turn with lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.";
  }

  return (
    <div>
      <p
        className={
          spotlightTimelineDescription === ""
            ? "timeline-description-null"
            : "timeline-description"
        }
      >
        {spotlightTimelineDescription}
      </p>
    </div>
  );
}

export default SpotlightTimelineDescription;
