import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: ${p => p.theme.radii.s};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3px;
  border: ${p => `${p.theme.borders.s} ${p.theme.colors.greyBorder}`};

  :hover {
    background-color: ${p => p.theme.colors.btnHover};
    color: ${p => p.theme.colors.blackFont};
  }
`;
