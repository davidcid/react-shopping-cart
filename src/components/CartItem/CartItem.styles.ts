import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #333;
    padding-bottom: 1rem;
    height: 120px;
    margin-top: 0.5rem;

    div {
        flex: 1;
    }

    .information, .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 80px;
        object-fit: scale-down;
        margin-left: 40px;
    }
`;