import { call, put, select, takeLatest } from "redux-saga/effects";
import { ActionTypes, APIArtwork, FetchArtworkAction } from "../store/types";
import { storeArtwork } from "../store/actions";
import { selectSearchTerm } from "./searchTermSelectors";
import { getArtwork } from "./artworkAPI";

function* fetchArtwork(action: FetchArtworkAction) {
  const searchTerm: string = yield select(selectSearchTerm);
  const artworks: APIArtwork[] = yield call(getArtwork, searchTerm); // if you need to use the results, use call
  yield put(storeArtwork(artworks));
}

function* mySaga() {
  yield takeLatest(ActionTypes.FETCH_ARTWORK, fetchArtwork);
}

export default mySaga;
