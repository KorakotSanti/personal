import SKILLS_DATA from './skills.data';

const INITIAL_STATE = {
  skillList: SKILLS_DATA
};

const skillsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default skillsReducer;