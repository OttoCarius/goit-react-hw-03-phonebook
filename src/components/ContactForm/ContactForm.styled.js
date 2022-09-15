import styled from 'styled-components';

export const StyledCont = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
  width: 170px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);
  text-align: center;

  ::placeholder {
    text-align: center;
  }
`;

export const StyledLabel = styled.label`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
  text-align: center;
`;

export const StyledButton = styled.button`
  color: ${p => p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
  width: 120px;
  height: 60px;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 40px;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;
  padding: 5px;

  :hover,
  :focus {
    background-color: aliceblue;
  }
`;
