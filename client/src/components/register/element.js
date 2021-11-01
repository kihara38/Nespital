import styled from "styled-components";

export const SigninForm =styled.form`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 0.5rem;
overflow: hidden;
grid-column: 1 / 2;
grid-row: 1 / 2;`;


export const FormSignin=styled.form`
z-index: 2;`;

export const FormSignup=styled.form`
z-index: 1;
opacity: 0;`;

export const Title=styled.h2`
font-size: 2.2rem;
color: #444;
margin-bottom: 10px;
`
export const InputField=styled.div`
max-width: 380px;
width: 100%;
height: 55px;
background-color: #c2baba;
margin: 10px 0;
border-radius: 55px;
display: grid;
grid-template-columns: 15% 85%;
padding: 0.4rem;
`
export const I=styled.i`
text-align: center;
line-height: 55px;
color:#0f0a0a;
font-size: 1.1rem;
`
export const Input=styled.input`
background: none;
outline: none;
border: none;
line-height: 1;
font-weight: 600;
font-size: 1.1rem;
color: rgb(3, 2, 2);
&:placeholder{
color: #aaa;
font-weight: 500;}
`
export const Bunt=styled.input`
width: 150px;
height: 49px;
border: none;
outline: none;
border-radius: 49px;
cursor: pointer;
background-color: rgb(13, 115, 218);
color: #fff;
text-transform: uppercase;
font-weight:600;
&:hover{
background-color: cornflowerblue;}
`