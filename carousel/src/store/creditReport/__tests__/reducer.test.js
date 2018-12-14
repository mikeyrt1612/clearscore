import reducer, { initialState } from '../reducer'
import * as actions from '../actions'
import * as actionTypes from '../actionTypes'

describe('credit report reducer', () => {
  test(`it should handle ${actionTypes.GET_CREDIT_REPORT_REQUEST}`, () => {
    expect(reducer(initialState, actions.getCreditReportRequest())).toEqual({
      ...initialState,
      loading: true,
    })
  })

  test(`it should handle ${actionTypes.GET_CREDIT_REPORT_SUCCESS}`, () => {
    const mockData = { score: 123, minScore: 456, maxScore: 789 }
    expect(reducer(initialState, actions.getCreditReportSuccess(mockData.score, mockData.minScore, mockData.maxScore))).toEqual({
      ...initialState,
      loading: false,
      error: undefined,
      info: mockData,
    })
  })

  test(`it should handle ${actionTypes.GET_CREDIT_REPORT_ERROR}`, () => {
    const mockError = 'Something went wrong...'
    expect(reducer(initialState, actions.getCreditReportError(mockError))).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    })
  })
})
