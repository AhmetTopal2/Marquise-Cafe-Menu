import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardLink, Row, CardImg, CardGroup } from 'reactstrap';
function MainMenu() {

    const StyledDiv = styled.div`
    width:75%;
    `
    const StyledHeader3 = styled.h3`
    border:1px solid black;
    text-align:center;
    width:100%;
    margin-bottom:25px;
    `
    return (
        <StyledDiv>
            <StyledHeader3>
                Menü
            </StyledHeader3>

        </StyledDiv>
    )
}

export default MainMenu
