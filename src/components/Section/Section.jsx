import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled';
import { StyledTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <StyledSection>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </StyledSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
