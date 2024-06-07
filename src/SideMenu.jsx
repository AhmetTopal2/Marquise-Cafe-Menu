import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardLink, Row } from 'reactstrap';
import MenuSelect from './MenuSelect';
function SideMenu() {

    const StyledDiv = styled.div`
    width:25%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    `
    const StyledHeader3 = styled.h3`
    border:1px solid black;
    text-align:center;
    width:100%;
    margin-bottom:25px;
    color:white;
    
    `
    return (
        <StyledDiv>
            <StyledHeader3>Menü</StyledHeader3>
            <MenuSelect>
            </MenuSelect>
        </StyledDiv>
    )
}

export default SideMenu
