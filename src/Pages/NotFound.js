import React from 'react';
import styled from 'styled-components';

function NotFound() {
    return (
        <Container>
            <h1>This is notfound demo page</h1>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
`;

export default NotFound;
