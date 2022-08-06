import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './logo.svg';

export const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 0 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(UnstyledLogo)`
  margin-top: 8px;
`;

export const Link = styled(UnstyledLink)`
  margin-left: 26px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
`;
