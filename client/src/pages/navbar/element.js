import styled from "styled-components";

import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom";


export  const Nav=styled.nav`
    background:  rgb(25, 25, 252,0.2);
    height: 15%;
    width: 100%;
    position: fixed;
    display:flex;
    margin-top:-1rem;
    
`
export const H1=styled.h1`
    color:white;
    font-size: 35px;
    line-height: 40px;
    margin-left:1.5rem;
`
export const Ul=styled.ul`
    display:none;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin:0px 10px 0px 80px;
    text-align:center;
    list-style:none;
    
    @media (min-width: 600px){
        display: flex;
    }
`
export const Alink=styled(Link)`
text-decoration:none;
`
export const Li=styled.li`
    /* background:rgba(22, 221, 4, 0.5); */
    border-radius: 50px;
    border: 1px;
    width: 140px;
    height: 50px;
    font-size: 20px;
    font-weight:10px;
    &:hover{background: rgb(182, 230, 10); }
`
export const MobileNavContainer=styled.ul`
    background:  #9e9595;
    text-decoration:none;
    list-style:none;
    text-align:center;
    margin-top:1.7rem;
    height:18rem;
    width:12rem;
    position: absolute;
    display: ${({open}) => open? "flex" : "none"};
    flex-direction: column;
    top: 70px;
    left: 0;
    z-index: 3000;
    transition:ease-in 10s;


    @media (min-width: 600px){
        display: none;
    }
    
`
export const MenuIcon = styled(FaBars)`
color: black;
font-size: 40px;
margin:2rem;
margin-left:8rem;


@media (min-width: 600px){
        display: none;
    }




`