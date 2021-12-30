import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        color: white;
        font-family: 'Days One';
    }
`;
export const Loading = styled.img`
    width: 100px;
    height: 100px;
    animation: loading 2s linear 0.5s infinite normal forwards running;
    @keyframes loading {
        0%{ 
            opacity: 0;
            transform: scale(0.5);
        }
        25%{ 
            opacity: 0.5;
            transform: scale(1);
        }
        50%{ 
            opacity: 1;
            transform: scale(1.2);
        }
        100%{ 
            opacity: 0;
            transform: scale(0.5);
        }
    }
`;