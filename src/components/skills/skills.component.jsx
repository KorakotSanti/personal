import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSkillList } from '../../redux/skills/skills.selectors';

const SkillsOverview = ({ skills }) => (
  <h1>
    {skills.map(({ id, skill, yearOfExp }) => (
        <div key={id}>
          {skill}
          {yearOfExp}
        </div>
    ))}
  </h1>
);

const mapStateToProps = createStructuredSelector({
  skills: selectSkillList
});

export default connect(mapStateToProps)(SkillsOverview);