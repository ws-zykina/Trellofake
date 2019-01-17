import { combineReducers } from 'redux';
import TaskReducer from './task.reducer';
import AuthReducer from './auth.reducer';


const rootReducer = combineReducers({
  task: TaskReducer,
  auth: AuthReducer,
});

export default rootReducer;
