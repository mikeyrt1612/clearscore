import {
  stateSelector,
  loadingSelector,
  scoreSelector,
  minScoreSelector,
  maxScoreSelector,
} from '../selectors'
import { initialState } from '../reducer'

describe('credit report selectors', () => {
  test('state selector', () => {
    const state = {
      creditReport: 'MOCK',
    }
    expect(stateSelector(state)).toBe('MOCK')
  })

  test('loading selector', () => {
    const state = {
      creditReport: {
        loading: true,
      },
    }
    expect(loadingSelector(state)).toBe(true)
  })

  test('score selector', () => {
    const state = {
      creditReport: {
        info: {
          score: 'MOCK',
        },
      },
    }
    expect(scoreSelector(state)).toBe('MOCK')
  })

  test('min score selector', () => {
    const state = {
      creditReport: {
        info: {
          minScore: 'MOCK',
        },
      },
    }
    expect(minScoreSelector(state)).toBe('MOCK')
  })

  test('max score selector', () => {
    const state = {
      creditReport: {
        info: {
          maxScore: 'MOCK',
        },
      },
    }
    expect(maxScoreSelector(state)).toBe('MOCK')
  })
})
