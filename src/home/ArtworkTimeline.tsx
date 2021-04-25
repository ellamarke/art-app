type artworkTimeline = {
  artworkName: string;
  date: number;
  imgSrc: string;
};

const picassoTimeline: artworkTimeline[] = [
  {
    artworkName: "Garcon a la pipe",
    date: 1905,
    imgSrc: "img/picasso/garcon.jpg",
  },
  {
    artworkName: "Les Demoiselles d'Avignon",
    date: 1907,
    imgSrc: "img/picasso/les-demoiselles.jpg",
  },
  {
    artworkName: "Femme au béret orange",
    date: 1937,
    imgSrc: "img/picasso/femme-au-beret.jpg",
  },
  {
    artworkName: "Guernica",
    date: 1937,
    imgSrc: "img/picasso/guernica.jpeg",
  },
  {
    artworkName: "Les Femmes d'Alger",
    date: 1955,
    imgSrc: "img/picasso/les-femmes.jpeg",
  },
];

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
          </div>
        );
      })}
    </div>
  );
}

export default ArtworkTimeline;
