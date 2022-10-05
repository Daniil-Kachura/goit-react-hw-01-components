import styled from '@emotion/styled';

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(25%);
  border: solid 1px ;
  border-color: #000;  
`

export const StatisticLabel = styled.span`
  font-size: 15px;
  color: #4f4f4f;
  margin-top: 5px;
  font-weight: bold;
  // color: white;
  // text-shadow: 1px 1px 1px black;
`

export const StatisticData = styled.span`
  margin: 10px;
  font-size: 18px;
  font-weight: bold;

  color: #000;
  // color: white;
  // text-shadow: 1px 1px 1px black;
`