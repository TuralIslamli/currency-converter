import { types } from "./actionTypes";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { setConvert, setConvertRate } from "../redux/actions";

const requestFunction = async (url) => {
    let result = await fetch(url)
        .then((res) => res.json())
        .then((value) => value.result)
        .catch((error) => console.warn(error));
    return result;
};

export function* workerConverterData() {
    try {
        const USD = yield call(requestFunction, 'https://api.exchangerate.host/convert?from=USD&to=UAH')
        const EUR = yield call(requestFunction, 'https://api.exchangerate.host/convert?from=EUR&to=UAH')
        yield put(setConvert({ USD, EUR }))
    } catch (error) {
        console.warn("workerConverterData ===>", error);
    }
}

export function* workerConverterInputs({payload:{from, to}}) {
    try {
        const rate = yield call(requestFunction, `https://api.exchangerate.host/convert?from=${from}&to=${to}`)
        yield put(setConvertRate(rate))
    } catch (error) {
        console.warn("workerConverterInputs ===>", error);
    }
}


export function* watcherConverterData() {
    yield takeEvery(types.SET_CONVERTER_DATA_SAGA, workerConverterData);
}

export function* watcherConverterInputs() {
    yield takeEvery(types.SET_CONVERTER_INPUTS, workerConverterInputs);
}