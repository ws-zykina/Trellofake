import { combineReducers } from 'redux';
import TaskReducer from './task.reducer';
import AuthReducer from './auth.reducer';
import GroupReducer from './group.reducer';



const rootReducer = combineReducers({
  tasks: TaskReducer,
  auth: AuthReducer,
  groups: GroupReducer,
});

export default rootReducer;
