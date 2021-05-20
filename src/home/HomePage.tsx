import { userGalleries } from "../reference/UserGalleries";
import PicassoTimeline from "./PicassoTimeline";
import TrendingGallery from "./trending-gallery/TrendingGallery";
import VisitGalleries from "../shared/buttons/VisitGalleries";

function HomePage() {
  return (
    <div>
      <PicassoTimeline />
      <div className="trending-galleries">
        {userGalleries.map((gallery) => {
          return (
            <TrendingGallery userGallery={gallery} key={gallery.galleryName} />
          );
        })}
      </div>
      <VisitGalleries />
    </div>
  );
}

export default HomePage;
