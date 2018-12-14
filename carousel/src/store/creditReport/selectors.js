import { createSelector } from 'reselect'

export const stateSelector = (state) => state.creditReport

export const loadingSelector = createSelector(
  stateSelector,
  ({ loading }) => loading,
)

export const scoreSelector = createSelector(
  stateSelector,
  ({ info: { score } }) => score,
)

export const minScoreSelector = createSelector(
  stateSelector,
  ({ info: { minScore } }) => minScore,
)

export const maxScoreSelector = createSelector(
  stateSelector,
  ({ info: { maxScore } }) => maxScore,
)
