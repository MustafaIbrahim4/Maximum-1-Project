import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteTree(action) {
  try {
    //Sends delete request and tree ID to server
    yield axios.delete(`/api/tree/${action.payload.tree_id}`);
    yield put({ type: 'GET_TREE' });
  }
  catch (error) {
    console.log('Sorry, tree could not be deleted', error);
  }
}

function* deleteSaga() {
  yield takeLatest('DELETE_TREE', deleteTree);
}

export default deleteSaga;