import { connect, ConnectedProps } from "react-redux";
import { ActionTypes, DateFilter, State } from "../store/types";
import { setDateFilter } from "../store/actions";
import { allArtworks } from "../reference/AllArtworks";

const mapStateToProps = (state: State) => ({
  dateFilters: state.dateFilters,
});

const mapDispatchToProps = {
  setDateFilter,
};

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const connector = connect(mapStateToProps, mapDispatchToProps);

function Explore({ setDateFilter, dateFilters }: Props) {
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
    return !!activeDateFilters.find((
      yearFilter // turns something truthy into a boolean
    ) => isYearValid(year, yearFilter));
  };

  const years: Array<keyof DateFilter> = [
    "1950",
    "1960",
    "1970",
    "1980",
    "1990",
  ];
  return (
    <div>
      <h1>Explore</h1>
      <h2>Filter art to discover more</h2>
      <h3>Time period</h3>
      <p>I want to see art created during the:</p>
      <div className="date-filters">
        {years.map((year) => (
          <MakeButton
            date={year}
            dateFilters={dateFilters}
            setDateFilter={setDateFilter}
          />
        ))}
      </div>
      {allArtworks
        .filter(({ date }) => isYearValidForAnyFilter(date))
        .map((artwork) => {
          return (
            <div>
              <img src={artwork.imgSrc} />
              <p>{artwork.artworkName}</p>
              <p>{artwork.date}</p>
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
      className={dateFilters[date] ? "true-button" : "false-button"}
    >
      {date}s
    </button>
  );
}

export default connector(Explore);
