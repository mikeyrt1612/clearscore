import { takeEvery, call, put } from 'redux-saga/effects'

import * as actions from './actions'
import * as actionTypes from './actionTypes'

import { getCreditReportInfo } from '../../services/creditReport'

export function* getCreditReportRequest(action) {
  try {
    const { creditReportInfo: { score, minScoreValue, maxScoreValue } } = yield call(getCreditReportInfo)
    yield put(actions.getCreditReportSuccess(score, minScoreValue, maxScoreValue))
  } catch (error) {
    yield put(actions.getCreditReportError(error))
  }
}

export default function* root() {
  yield takeEvery(
    actionTypes.GET_CREDIT_REPORT_REQUEST,
    getCreditReportRequest,
  )
}
