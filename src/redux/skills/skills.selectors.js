import { createSelector } from 'reselect';

const selectSkills = (state) => state.skills;

export const selectSkillList = createSelector(
  [selectSkills],
  (skills) => skills.skillList
);