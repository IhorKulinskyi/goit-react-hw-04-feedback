import styled from '@emotion/styled';

export const StatsList = styled.ul`
  margin: 0;
  padding: 16px 32px;
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: 4px dashed #ff6d60;
  background-color: #fae0e4;
  border-radius: 25px;
`;

export const StatsListItem = styled.li`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.span`
  border-radius: 50%;
  width:30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const TotalStatsList = styled.ul`
  list-style: none;
  font-weight: 500;
  font-size: 28px;
  font-family: sans-serif;
`;
