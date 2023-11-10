import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import uk from '../../img/uk.png';
import en from '../../img/en.png';

export const Container = styled.section`
  max-width: 1430px;

  padding-left: 120px;
  padding-right: 120px;
  margin: 0 auto;

  @media screen and (min-width: 320px) and (max-width: 728px) {
    max-width: 380px;
    padding-left: 20px;
    padding-right: 20px;
  }
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

  @media screen and (min-width: 320px) and (max-width: 728px) {
    padding: 10px 30px;
    justify-content: center;
  }
`;

export const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  padding: 15px;
  background-color: #baeaff7a;
  border-radius: 20px;
  border: 1px solid;

  &.active {
    color: #fff;
    border: 2px solid green;
  }

  @media screen and (min-width: 320px) and (max-width: 728px) {
    font-size: 10px;
  }
`;

export const LinkEmblem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 30px;

  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: 320px) and (max-width: 728px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (min-width: 320px) and (max-width: 728px) {
    align-items: center;
    justify-content: center;
  }
`;

export const WrapperTranslate = styled.div`
  & button:not(:last-child) {
    margin-right: 5px;
  }
`;

export const ButtonUk = styled.button`
  cursor: ${({ $datadisabled }) =>
    $datadisabled === 'true' ? 'not-allowed' : 'pointer'};
  width: 30px;
  height: 20px;

  background-image: url(${uk});
  background-size: contain;
  background-position: center;
  border: none;
  border-radius: 3px;
`;

export const ButtonEn = styled.button`
  cursor: ${({ $datadisabled }) =>
    $datadisabled === 'true' ? 'not-allowed' : 'pointer'};
  width: 30px;
  height: 20px;

  background-image: url(${en});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: none;
  border-radius: 3px;
`;
