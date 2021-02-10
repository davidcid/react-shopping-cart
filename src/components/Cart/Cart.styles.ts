import styled from 'styled-components';

export const Wrapper = styled.aside`
    width: 100%;
    padding: 20px;

    @media screen and (min-width: 768px) {
        width: 500px;
    }

    .header {
        display: flex;
        aligin-items: center;
        justify-content: space-between;
        margin-bottom: 3rem;
    }

    .header .close {
        cursor: pointer;
    }

    .total {
        margin-top: 1rem;
    }
`;