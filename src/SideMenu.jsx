import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardLink, Row } from 'reactstrap';
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
    `
    return (
        <StyledDiv>
            <StyledHeader3>Menü</StyledHeader3>
            <Card
                style={{
                    width: '18rem',
                    backgroundColor: "#2a4a46",
                    color: "white",
                    borderColor: "white",
                    marginBottom: "10px",

                }}
            >
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                    style={{
                        borderRadius: "15px",
                    }}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '18rem',
                    backgroundColor: "#2a4a46",
                    color: "white",
                    borderColor: "white",
                    marginBottom: "10px",

                }}
            >
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                    style={{
                        borderRadius: "15px",
                    }}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                </CardBody>
            </Card>
        </StyledDiv>
    )
}

export default SideMenu
