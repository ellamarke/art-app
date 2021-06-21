import { State } from "../store/types";

export const selectSearchTerm = (state: State) => state.searchTerm;
