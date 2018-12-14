jest.mock('../../../services/creditReport/index')

import { expectSaga } from 'redux-saga-test-plan'

import * as actions from '../actions'
import { getCreditReportRequest } from '../sagas'

import { getCreditReportInfo } from '../../../services/creditReport'
import { mockData } from '../../../services/creditReport/__mocks__'

describe('credit report sagas', () => {
  describe('getCreditReportRequest saga', () => {
    it('should dispatch success action with successful api call', async () => {
      const { creditReportInfo: { score, minScoreValue, maxScoreValue } } = mockData
      await expectSaga(getCreditReportRequest)
        .put(actions.getCreditReportSuccess(score, minScoreValue, maxScoreValue))
        .run()
    })

    test('should dispatch error action with failed api call', async () => {
      const mockError = 'Oops. Somethings went wrong...'
      getCreditReportInfo.mockRejectedValueOnce(mockError)
      await expectSaga(getCreditReportRequest)
        .put(actions.getCreditReportError(mockError))
        .run()
    })
  })
})
