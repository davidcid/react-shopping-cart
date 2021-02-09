import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    box-shadow: 0px 5px 7px 3px rgba(0,0,0,0.13);
    // width: 300px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
    
    .main-card {
        padding: 1rem;
        border-radius: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    img {
        max-height: 400px;
        max-width: 100%;
        object-fit: scale-down;
    }

    .add-to-cart {
        display: block;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        background: black;
        color: white;
        font-weight: 700;
        box-sizing: border-box;
        border: 3px solid black;
        padding: 0;
        border-radius: 0;
    }
    
    .add-to-cart:hover {
        background: white;
        color: black;
    }
    
    h3 {
        text-align: center;
    }

    .main-text {
        padding: 0.5rem;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .title {
        font-size: 0.9rem;
        text-transform: uppercase;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .price {
        font-weight: 400;
        margin-top: 0.5rem;
    }
    
    .item-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        overflow: hidden;
        transition: all 0.2s ease;
        background: white;
        top: 370px;
        height: 100%;
        width: 100%;
        //transform: translateY(-200px);
    }

    &:hover .item-text {
        transform: translateY(-200px);
    }

    .description {
        padding: 0 1rem;
        font-size: 0.9rem;
    }
`;