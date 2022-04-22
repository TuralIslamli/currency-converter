import { spawn, all } from "redux-saga/effects";
import { watcherConverterData } from ".";

export default function* rootSaga() {
    try {
        yield all([
            spawn(watcherConverterData),
        ]);
    } catch (error) {
        console.warn('rootSaga: ', error);
    };
};