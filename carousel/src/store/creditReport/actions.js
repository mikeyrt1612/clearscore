import * as types from './actionTypes'

export const getCreditReportRequest = () => ({
  type: types.GET_CREDIT_REPORT_REQUEST,
})

export const getCreditReportSuccess = (score, minScore, maxScore) => ({
  type: types.GET_CREDIT_REPORT_SUCCESS,
  score,
  minScore,
  maxScore,
})

export const getCreditReportError = (error) => ({
  type: types.GET_CREDIT_REPORT_ERROR,
  error,
})
