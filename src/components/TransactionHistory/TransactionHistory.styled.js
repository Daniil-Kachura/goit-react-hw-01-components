import styled from '@emotion/styled';

export const Table = styled.table`
  width: 400px;
  margin: 0 auto;

  overflow: hidden;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-spacing: 0;
`

export const TableHead = styled.thead`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.7231267507002801) 0%, rgba(0,212,255,1) 100%);
`

export const Heading = styled.th`
  line-height: 20px;
  padding: 10px 20px;
  color: #000;
  text-transform: uppercase;
  border: 0.5px solid #f0f9fa;
`

export const TableBody = styled.tbody`
  text-align: center;
`
