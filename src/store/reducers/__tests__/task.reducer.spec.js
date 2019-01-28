import reducer, { defaultState } from '../task.reducer'
import * as t from '../../types/task.type'

describe('news reducer', () => { //  describe - группировка для наших тестов новостного редьюсера
  
  it('GET_TASKS', () => { // it - блок, конкретного unit-теста 
    const action = {
      type: t.GET_TASKS,
      payload: [1, 2, 3]
    }

    expect(reducer(defaultState, action)).toEqual({
      ...defaultState,
      items: action.payload
    })
  })

})
