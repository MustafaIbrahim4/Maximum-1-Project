// Get Tree Saga
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// GetTree Saga
function* getTreeSaga(action) {
    try {
        const response = yield axios.get(`/api/tree/`);
        // const response = yield axios.get(`/api/tree/`, action.payload);
        yield put({ type: 'ALL_TREE', payload: response.data })
    }
    catch (error) {
        console.log('Error with TREE GET', error);
    }
}

//getStepSaga
function* getStepSaga(action) {
    try {
        const response = yield axios.get(`/api/step/phases/${action.payload}`);
        yield put({ type: 'ALL_STEPS', payload: response.data })
    }
    catch (error) {
        console.log('Error with STEP GET', error);
    }
}

// sortTreeSaga
function* sortTreeSaga(action) {
    try {
        const response = yield axios.get(`/api/sort/${action.payload}`);
        yield put({ type: 'ALL_TREE', payload: response.data })
    }
    catch (error) {
        console.log('Error with SORT GET tree', error);
    }
}

function* getSaga() {
    yield takeLatest('GET_TREE', getTreeSaga);
    yield takeLatest('FETCH_TREE_BY_ID', getStepSaga);
    yield takeLatest('SORT_TREE', sortTreeSaga);
}

export default getSaga;