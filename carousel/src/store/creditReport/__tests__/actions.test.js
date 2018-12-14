import {
  getCreditReportRequest,
  getCreditReportSuccess,
  getCreditReportError,
} from '../actions'
import * as types from '../actionTypes'

describe('credit report actions', () => {
  test('getCreditReportRequest()', () => {
    expect(getCreditReportRequest()).toEqual({
      type: types.GET_CREDIT_REPORT_REQUEST,
    })
  })

  test('getCreditReportSuccess()', () => {
    const score = 123
    const minScore = 456
    const maxScore = 789
    expect(getCreditReportSuccess(score, minScore, maxScore)).toEqual({
      type: types.GET_CREDIT_REPORT_SUCCESS,
      score,
      minScore,
      maxScore,
    })
  })

  test('getCreditReportError()', () => {
    const error = 'Ooops. Something went wrong...'
    expect(getCreditReportError(error)).toEqual({
      type: types.GET_CREDIT_REPORT_ERROR,
      error,
    })
  })
})
