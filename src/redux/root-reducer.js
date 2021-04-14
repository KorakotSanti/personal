import { combineReducers } from 'redux';

import skillsReducer from './skills/skills.reducers';

const rootReducer = combineReducers({
  skills: skillsReducer,
});

export default rootReducer;