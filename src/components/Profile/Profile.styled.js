import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  margin: 0 auto;

  text-align: center;
  font-size: 14px;
  line-height: 1.2;

  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.7231267507002801) 0%, rgba(0,212,255,1) 100%);
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;
export const Avatar = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 5px;
  display: block;
  border-radius: 50%;
  border: 1px solid white;
`;

export const UserName = styled.p`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  
`

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  border-top: 1px solid #0a0a0a;
  
`

export const Item = styled.li`
  display: flex;
  flex-basis: calc(100% / 3 );
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 5px;

  :not(:last-child) {
    border-right: 1px solid #0a0a0a;
  }
`

export const Label = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #4f4f4f;`


export const Value = styled.span`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
  color:#000 ;`