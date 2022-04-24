import { spawn, all } from "redux-saga/effects";
import { watcherConverterData, watcherConverterInputs } from ".";

export default function* rootSaga() {
    try {
        yield all([
            spawn(watcherConverterData),
            spawn(watcherConverterInputs),
        ]);
    } catch (error) {
        console.warn('rootSaga: ', error);
    };
};