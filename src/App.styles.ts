import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import LinearProgress from '@material-ui/core/LinearProgress';



export const Wrapper = styled.div`
    margin-top: 6.9rem;
    position: relative;
        
    .articles {
        margin: 1rem auto;
    }

    .error {
        padding: 2rem;
        font-size: 1.3rem;
        font-weight: 300;
        height: 40vh;
    }

    @media screen and (min-width: 768px) {
        margin-top: 4.9rem;
    }
`;

export const StyledButton = styled.button`
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

export const Search = styled(SearchIcon)`
    color: #333;
    margin: 0;
`;

export const Progress = styled(LinearProgress)`
    width: 100%;
    margin-bottom: 15rem;
`;