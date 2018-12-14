import React from 'react'
import { shallow } from 'enzyme'

import { mapDispatchToProps, stateToProps } from '../Carousel'

import { getCreditReportRequest } from '../../../../store/creditReport/actions'
import {
  loadingSelector,
  scoreSelector,
  minScoreSelector,
  maxScoreSelector,
} from '../../../../store/creditReport/selectors'

describe('Carousel container', () => {
  describe('state mapping', () => {
    it('should map all states', () => {
      expect(stateToProps).toEqual({
        loading: loadingSelector,
        score: scoreSelector,
        minScore: minScoreSelector,
        maxScore: maxScoreSelector,
      })
    })
  })

  describe('dispatch mapping', () => {
    it('should map "getCreditReport"', () => {
      const dispatch = jest.fn()
      mapDispatchToProps(dispatch).getCreditReport()
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(getCreditReportRequest())
    })
  })
})
