import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';



export const Wrapper = styled(AppBar)`
background-color: white;
padding: 0;
margin: 0;

.navBar {
    padding: 0.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #333;
    background-color: white;
    
}


    .categories {
        display: none;
    }

    @media screen and (min-width: 768px) {

        .navBar {
            padding: 0.4rem 0.8rem;
        }
        .categories {
            display: flex;
            padding: 0.3rem 1rem;
        }
    }
    
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
        margin: 0 1.4rem;
        padding: 0.4rem 0;
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 0.4s ease;
    }

    ul li.active {
        border-bottom: 1px solid #333;
    }

    ul li: hover {
        border-bottom: 1px solid #333;
    }
    
    .search {
        display: flex;
        align-items: center;
        color: #333;
        opacity: 1;
        margin-left: auto;
        margin-right: 0.5rem;
        border-radius: 3px;

        @media screen and (min-width: 768px) {
            margin-right: 1rem;
        }
    }
    
    .search .searchIcon {
        margin: 0 1rem;
    }
    
    .search .inputBase {
        width: 150px;
    }
`;

export const Menu = styled(MenuIcon)`
    color: #333;
    margin: 0;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const Search = styled(SearchIcon)`
    color: #333;
    margin: 0;
`;
    
export const StyledButton = styled(IconButton)`
    padding: 0;
    color: #333;

    @media screen and (min-width: 768px) {
        margin-right: 2rem;
    }
`;
