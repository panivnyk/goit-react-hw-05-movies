import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
`;

export const AddInfoNavLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    font-weight: 500;
    text-decoration: underline orangered;

    /* background-color: orangered; */
  }
`;

export const DivDetailsCard = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const DivDetailsInfo = styled.div`
  display: block;
  margin-left: 20px;
  border-bottom: 1px solid black;
`;
