import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 10px;
  color: ${p => p.theme.colors.primaryText};
  /* background-color: ${p => p.theme.colors.white}; */
  text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5,
    -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5,
    -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5,
    -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  padding: ${p => p.theme.space[4]}px;
  text-align: center;
`;
