import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

function Footer() {


    const StyledDiv = styled.div`
width:100%;
height: 50px;
background-color: #2a4a46;
text-align:center;
padding:10px;
color:#fff;
`

    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <StyledDiv>
                <p>Mutlukent Mah. 1950 sk. No 23 Çankaya/ Ankara</p>
            </StyledDiv>
        </div>
    )
}

export default Footer
