import styled from 'styled-components';


export const Wrapper = styled.div`
    // margin: 80px 0;
    .articles {
        margin: 1rem auto;
    }
`;

export const StyledButton = styled.button`
    padding: 1rem 2rem;
    background: white;
    color: #333;
    text-transform: uppercase;
    width: 200px;
    height: 50px;
    margin: 0.5rem;
    border: 1px solid #333;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        color: white;
        background: black;
    }
`;
