import * as types from './actionTypes'

export const initialState = {
  loading: true,
  error: undefined,
  info: {
    score: 0,
    minScore: 0,
    maxScore: 700,
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CREDIT_REPORT_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.GET_CREDIT_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        info: {
          score: action.score,
          minScore: action.minScore,
          maxScore: action.maxScore,
        },
      }

    case types.GET_CREDIT_REPORT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}

export default reducer
