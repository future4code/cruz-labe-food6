import styled from 'styled-components';

export const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
font-family: 'Roboto', sans-serif;

input{
    margin-top: 10px;
}
`

export const P = styled.p `
color: black;
font-weight: bold;
text-align: center;
`


export const Header = styled.div `
display: flex;
margin-top: 5px;
width: 100vw;
border-bottom: solid 1px #E8E8E8;
justify-content: center;
`

export const ContainerCard = styled.div `
display: flex;
flex-direction: column;
  width: 300px;
  padding: 0 0 16px;
  border-radius: 8px;
  border: solid 1px gray;
  margin-top: 10px;
  justify-content:center;
`
export const ImgDiv = styled.div `
 width: 100%;
 height: 200px;
 img {
    height: 100%;
    width: 100%;
    object-fit: fill;
}
`
export const DivDetail = styled.div `
display: flex; 
flex-direction: column;
margin: 0 10px;
p{
    color: #5cb646;
    font-size: 16px;
    font-weight: bold;
}
`

export const DivPrice = styled.div `
    display: flex;
    justify-content: space-between;
p{
    margin:0;
    color: #b8b8b8;
    font-size: 16px;
}
`

export const CardDiv = styled.div`
    height: 100vh;
    
`