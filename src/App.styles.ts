import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';



export const Wrapper = styled.div`
    margin-top: 4.9rem;
    position: relative;
        
    .articles {
        margin: 1rem auto;
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

