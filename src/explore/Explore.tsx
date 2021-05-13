import { connect, ConnectedProps } from "react-redux";
import { ActionTypes, DateFilter, State } from "../store/types";
import { setDateFilter } from "../store/actions";

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
