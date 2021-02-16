import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';




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

    .menubutton {
        display: block;

        @media screen and (min-width: 768px) {
            display: none;
        }
    }
    
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

    ul li:hover {
        border-bottom: 1px solid #333;
    }
    
    .searchButton {
        display: flex;
        align-items: center;
        color: #333;
        opacity: 1;
        margin-left: auto;
        margin-right: 0.5rem;
        border-radius: 3px;
        cursor: pointer;

        @media screen and (min-width: 768px) {
            margin-right: 1rem;
        }
    }
    
    .searchButton .searchIcon {
        margin: 0 1rem;
    }
    
    .searchButton .inputBase {
        width: 150px;
    }

    .searchBar {
        position: absolute;
        width: 100%;
        background: white;
        padding: 0.5rem 3rem;
        transition: all 0.3s ease-out;
        //transform: translateY(-50px);
        align-items: center;
        justify-content: space-between;
        display: flex;
        z-index: -1;
        box-shadow: inset 0px 7px 7px -6px rgba(0,0,0,0.3);
    }

    .searchBar.active {
        transform: translateY(75px);
    }
`;

export const Menu = styled(MenuIcon)`
    color: #333;
    margin: 0;
    margin-right: auto;
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

export const Close = styled(CloseIcon)`
    color: #333;
    margin: 0;
    font-size: 0.9rem;
    cursor: pointer;
`;