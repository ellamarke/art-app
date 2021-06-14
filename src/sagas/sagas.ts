import { call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes, APIArtwork, FetchArtworkAction } from "../store/types";
import { storeArtwork } from "../store/actions";

function getArtwork(searchTerm: string): Promise<APIArtwork[]> {
  return fetch(`/api/art/search`)
    .then((res) => res.json())
    .then((data) => data.results);
}

function* fetchArtwork(action: FetchArtworkAction) {
  const artworks: APIArtwork[] = yield call(getArtwork, action.searchTerm);
  yield put(storeArtwork(artworks));
}

function* mySaga() {
  yield takeLatest(ActionTypes.FETCH_ARTWORK, fetchArtwork);
}

export default mySaga;
