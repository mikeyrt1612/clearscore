import creditReportSaga from './creditReport/sagas'
import { all, fork } from 'redux-saga/effects'

const sagas = [
  creditReportSaga,
]

export default function* () {
  yield all(sagas.map(saga => fork(saga)))
}
