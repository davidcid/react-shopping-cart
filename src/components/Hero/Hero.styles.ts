import styled from 'styled-components';

export const Wrapper = styled.div`

    position: relative;
    
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;

        @media screen and (min-width: 768px) {
            height: 400px;
        }

        @media screen and (min-width: 1024px) {
            height: 500px;
        }
    }
    
    .hero-text {
        max-width: 90%;
        position: absolute;
        bottom: 1.6rem;
        left: 1.6rem;
        background: rgba(255,255,255,0.5);
        padding: 1rem;
        text-align: center;

        h3 {
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.5rem;
            margin-bottom: 1rem;
        }
        
        h1 {
            text-transform: uppercase;
        }

    }


`;