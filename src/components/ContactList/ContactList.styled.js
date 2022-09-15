import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 20px;
`;

export const StyledItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
`;

export const StyledButton = styled.button`
  margin-left: 30px;
  color: ${p => p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
  width: 60px;
  height: 35px;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 40px;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;

  :hover,
  :focus {
    background-color: aliceblue;
  }
`;
