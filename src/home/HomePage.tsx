import { userGalleries } from "../reference/UserGalleries";
import PicassoTimeline from "./PicassoTimeline";
import TrendingGallery from "./trending-gallery/TrendingGallery";

function HomePage() {
  return (
    <div>
      <PicassoTimeline />
      {userGalleries.map((gallery) => {
        return (
          <TrendingGallery userGallery={gallery} key={gallery.galleryName} />
        );
      })}
    </div>
  );
}

export default HomePage;
