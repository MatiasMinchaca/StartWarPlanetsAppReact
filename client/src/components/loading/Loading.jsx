import React from 'react';
import { Container, Loading } from './Loading elements';

const loading = () => {
    return (
        <Container>
            <Loading src='/images/loading.png'/>
            <p>Loading...</p>
        </Container>
    );
};

export default loading;