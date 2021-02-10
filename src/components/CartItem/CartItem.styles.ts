import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #333;
    padding-bottom: 1rem;
    height: 120px;
    margin-top: 0.5rem;

    .item-info {
        width: 100%;
    }

    h3 {
        // white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
        height: 60px;
    }

    .information, .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img {
        width: 80px;

        object-fit: scale-down;
        margin-left: 1rem;
    }
`;