import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  max-width: 1430px;

  padding-left: 120px;
  padding-right: 120px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  max-width: 1300px;
  margin: auto;
  background-color: #3470ff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 30px;
  padding: 20px 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 20px;

  &.active {
    color: rgba(18, 20, 23, 0.2);
  }
`;

export const LinkEmblem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 30px;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
