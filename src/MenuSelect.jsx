import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Button } from 'reactstrap'
import styled from 'styled-components'


const StyledDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`
function MenuSelect() {
    return (
        <StyledDiv>
            <Link to="/">
                <Button size='sm'
                    color="primary"
                    style={{ margin: "5px", backgroundColor: "#2a4a46" }}
                >
                    Ana Sayfa
                </Button>
            </Link>
            <Link to="/kruvasanlar">
                <Button size='sm'
                    color="primary"
                    style={{ margin: "5px", backgroundColor: "#2a4a46" }}
                >
                    Kruvasanlarımız
                </Button>
            </Link>
        </StyledDiv>

    )
}

export default MenuSelect
