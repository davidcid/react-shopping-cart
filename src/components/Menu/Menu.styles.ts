import styled from 'styled-components';

export const Wrapper = styled.aside`
    width: 100%;
    padding: 20px;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
    }
    
    ul li {
        font-size: 0.8rem;
        text-transform: uppercase;
        margin: 1rem 0;
        margin-right: 3rem;
        padding: 0;
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 0.4s ease;
    }

    h2 {
        text-transform: uppercase;
        font-size: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
        cursor: pointer;
    }

`;