import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  position: relative;

`

export const P = styled.p `
color: black;
font-weight: bold;
text-align: center;
font-family: -apple-system, Roboto, "Open Sans", "Helvetica Neue", sans-serif;
`


export const Header = styled.div `
display: flex;
margin-top: 5px;
width: 100vw;
border-bottom: solid 1px #E8E8E8;
justify-content: center;
`
export const Payment = styled.div`
  width: 90vw;
  border-bottom: 1px solid black;
  margin-left: 18px;
`;

export const PaymentMethod = styled.p`
    text-align: start;
    margin-right:0;
    font-weight: normal;
    font-family: -apple-system, Roboto, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
`

export const SubTotalText = styled.p`
  font-weight: normal;
  font-family: -apple-system, Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: end;
  margin-right: 3rem;
`;

export const FreteText = styled.p`
  font-family: -apple-system, Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: end;
  margin-right: 3rem;
`;

export const CheckBoxContainer = styled.div`
  margin-top: 1rem;
  height: 30vh;
`;

export const LabelCheckBox = styled.label`
  font-weight: normal;
  font-family: -apple-system, Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 90vw;
  height: 42px;
  border-radius: 2px;
  background-color: #5cb646;
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  font-family: -apple-system, Roboto, "Open Sans",  sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  border: 0;
`;
export const InputCheck = styled.input`
margin-left: 1rem;
`

export const BoxInfo = styled.div`
  width: 100vw;
  background-color: #eeeeee;
  height: auto;
`;

export const Title = styled.p`
  color: #b8b8b8;
  text-align: start;
  margin-left: 1rem;
  margin-bottom: 0;
  font-family: -apple-system, Roboto, "Open Sans",  sans-serif;
`;

export const InfoAddress = styled.p`
  color: black;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;