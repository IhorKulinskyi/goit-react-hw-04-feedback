import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  list-style: none;
`;

export const OptionButton = styled.button`
  align-items: center;
  background-color: ${({ name }) => {
    if (name === 'good') {
      return '#98D8AA';
    }
    if (name === 'neutral') {
      return '#F3E99F';
    } else {
      return '#FF6D60';
    }
  }};
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :after {
    background-color: #111;
    border-radius: 8px;
    content: '';
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }
  :hover:after {
    transform: translate(0, 0);
  }
  :active {
    background-color: #ffdeda;
    outline: 0;
  }
  :hover {
    outline: 0;
  }
`;
