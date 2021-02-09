import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';



export const Wrapper = styled(AppBar)`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
    h2 {
        text-transform: uppercase;
        font-size: 1rem;
        margin-right: 1rem;
        margin-left: 2rem;
        cursor: pointer;
    }
    
    ul {
        list-style: none;
        display: flex;
    }
    
    ul li {
        font-size: 0.8rem;
        text-transform: uppercase;
        margin: 0.4rem 1rem;
        padding-bottom: 0.4rem;
        border: 1px solid transparent;
        cursor: pointer;
    }

    ul li.active {
        border-bottom: 1px solid white;
    }

    ul li: hover {
        border-bottom: 1px solid white;
    }
    
    .search {
        display: flex;
        align-items: center;
        background: rgba(255,255,255,0.4);
        margin-left: auto;
        margin-right: 1rem;
        border-radius: 3px;
    }
    
    .search .searchIcon {
        margin: 0 1rem;
    }
    
    .search .inputBase {
        color: white;
        width: 150px;
    }
`;

export const StyledButton = styled(IconButton)`
    color: white;
    margin-right: 2rem;
    padding: 0;

`;
