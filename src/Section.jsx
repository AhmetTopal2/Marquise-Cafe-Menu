import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components';
import SideMenu from './SideMenu';
import MainMenu from './MainMenu';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';



function Section() {

    const StyledDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    gap:6px;
    padding:10px 6px;
    background-color: #2a4a46;
    
    
    `


    return (
       
            <StyledDiv>
                <SideMenu></SideMenu>
                <MainMenu></MainMenu>
            </StyledDiv>
        
    )
}

export default Section
