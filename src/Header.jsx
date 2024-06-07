import React from 'react';
import styled from 'styled-components';

const StyledReset = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

const HeaderDiv = styled.div`
    background-color: #2a4a46;
    color: #e1dfd7;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

const BorderBottom = styled.div`
    border-bottom-width: 2px;
    border-color: #fff;
`;

const Header = () => {
    return (
        <StyledReset>
            <HeaderDiv>
                <div>
                    <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>Marquise</h1>
                    <BorderBottom />
                    <p style={{ fontSize: '0.875rem' }}>Coffee & Patisserie</p>
                </div>
                <Nav>
                    <a href="#" style={{ fontWeight: 'bold', marginRight: '1rem', textDecoration: "none", color: "#e1dfd7" }}>Ana Sayfa</a>
                    <a href="#" style={{ marginRight: '1rem', textDecoration: "none", color: "#e1dfd7" }}>Bize Ulaşın</a>
                    <a href="#" style={{ marginRight: '1rem', textDecoration: "none", color: "#e1dfd7" }}>Menü</a>
                </Nav>
            </HeaderDiv>
        </StyledReset>
    );
};

export default Header;
