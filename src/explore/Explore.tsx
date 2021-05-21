import { connect, ConnectedProps } from "react-redux";
import { ActionTypes, DateFilter, State } from "../store/types";
import { setDateFilter } from "../store/actions";
import { allArtworks } from "../reference/AllArtworks";
import { changeActiveArtwork } from "../store/actions";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state: State) => ({
  dateFilters: state.dateFilters,
  activeArtwork: state.activeArtwork,
});

const mapDispatchToProps = {
  setDateFilter,
  changeActiveArtwork,
};

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const connector = connect(mapStateToProps, mapDispatchToProps);

function Explore({ setDateFilter, dateFilters, changeActiveArtwork }: Props) {
  // [["1970", true], ["1980", false]]

  // [{key: "1970", value: true}]

  const activeDateFilters: Array<number> = Object.entries(dateFilters)
    .map((entry) => ({
      key: entry[0],
      value: entry[1],
    }))
    .filter((pair) => pair.value) // all entries which are true
    .map((pair) => pair.key)
    .map((year) => Number.parseInt(year));
  // [1950, 1970]

  const isYearValid = (year: number, filterStartYear: number): boolean => {
    return year >= filterStartYear && year < filterStartYear + 10;
  };

  const isYearValidForAnyFilter = (year: number): boolean => {
    return !!activeDateFilters.find(
      (
        yearFilter // turns something truthy into a boolean
      ) => isYearValid(year, yearFilter)
    );
  };

  const years: Array<keyof DateFilter> = [
    "1930",
    "1940",
    "1950",
    "1960",
    "1970",
    "1980",
    "1990",
    "2000",
  ];

  const history = useHistory();
  function goToArtworkPage(artworkName: string) {
    console.log("I've been clicked!");
    changeActiveArtwork(artworkName);
    if (typeof artworkName === "string") {
      history.push("/artwork-page");
    }
  }

  return (
    <div>
      <h1 className="caps-headline text-centre margin-top">Filter art</h1>
      <p className="intro-paragraph">
        Discover new artwork from the best artists in the world.
      </p>
      <div className="card filter-card">
        <h2 className="no-margin">Time period</h2>
        <p className="card-text">I want to see art created during the:</p>
        <div className="date-filters">
          {years.map((year, index) => (
            <MakeButton
              date={year}
              dateFilters={dateFilters}
              setDateFilter={setDateFilter}
              key={index}
            />
          ))}
        </div>
      </div>
      {allArtworks
        .filter(({ date }) => isYearValidForAnyFilter(date))
        .map((artwork, index) => {
          return (
            <div className="filtered-artwork-container" key={index}>
              <img
                src={artwork.imgSrc}
                alt={artwork.artworkName}
                className="filtered-artwork"
                onClick={() => goToArtworkPage(artwork.artworkName)}
              />
              <p className="caption">
                {artwork.artworkName}, {artwork.date}
              </p>
            </div>
          );
        })}
    </div>
  );
}

type buttonProps = {
  date: keyof DateFilter;
  dateFilters: DateFilter;
  setDateFilter: (
    date: keyof DateFilter,
    enabled: boolean
  ) => {
    type: ActionTypes;
    date: keyof DateFilter;
    enabled: boolean;
  };
};

function MakeButton({ date, dateFilters, setDateFilter }: buttonProps) {
  return (
    <button
      onClick={() => setDateFilter(date, !dateFilters[date])}
      className={
        dateFilters[date]
          ? "true-button filter-button"
          : "false-button filter-button"
      }
    >
      {date}s
    </button>
  );
}

export default connector(Explore);
