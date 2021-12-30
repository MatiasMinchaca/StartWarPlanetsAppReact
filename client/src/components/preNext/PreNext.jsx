import React, { useContext } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { PreNextContext } from '../../contex/PreNext';
import { ButtonNext, ButtonPre, Container } from './PreNext elements';

const PreNext = () => {

    const {handlePre, handleNext, page} = useContext(PreNextContext)

    return (
        <Container>
            <ButtonPre onClick={() => page > 0 ? handlePre() : null}>
                <FaArrowLeft />
                Previous
            </ButtonPre>
            <ButtonNext onClick={() => page < 50 ? handleNext() : null}>
                Next
                <FaArrowRight />
            </ButtonNext>
        </Container>
    );
};

export default PreNext;