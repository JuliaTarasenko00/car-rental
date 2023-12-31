import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  backdrop-filter: blur(5px);
  z-index: 1200;
`;

export const Modal = styled.div`
  position: relative;
  border-radius: 24px;
  background-color: #fff;
  max-width: 541px;
  max-height: 550px;
  overflow: scroll;

  padding: 40px;

  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  display: flex;
  justify-content: center;

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  @media screen and (min-width: 320px) and (max-width: 728px) {
    max-width: 300px;
    padding: 20px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #121417;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    color: #3e85f3;
  }

  @media screen and (min-width: 320px) and (max-width: 728px) {
    font-size: 20px;
    top: 15px;
    right: 0;
  }
`;
