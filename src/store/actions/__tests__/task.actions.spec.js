
import configureMockStore from 'redux-mock-store'

import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';

import api from '../../../core/api'
import Axios from '../../../core/axios'

import { getTasks } from '../task.actions'
import { GET_TASKS, CREATE_TASK, REMOVE_TASK, CHANGE_TASK_GROUP} from "../../types/task.type";


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('tasks actions', async () => { 
    let mockAxios;
    let store;

    beforeEach(() => {
      mockAxios = new MockAdapter(Axios);
      store = mockStore({});
    });

    afterEach(() => {
      mockAxios.restore();
    });

    it('creates NEWS_GET_SUCCESS when fetching news has been done', async () => {

        const expectedActions = [
          {
            type: GET_TASKS,
            payload: [1, 2, 3],
          },
        ]
        mockAxios.onGet(`${api.host}${api.tasks.getTasks}`).reply(200, [1, 2, 3]);
        
        await store.dispatch(getTasks());

        expect(store.getActions().map(({ type, payload }) => ({ type, payload }))).toEqual(expectedActions);
        
       
    })
  

})
