import { useState } from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';


//Styles
import { Wrapper, StyledButton, Search, Menu, Close } from './NavBar.styles';
//Types
import { CartItemType } from '../../App';

type Props = {
    openMenu: () => void;
    setCartOpen: () => void;
    setSearch: (search:string) => void;
    cartItems: CartItemType[];
    filter: string;
    setFilter: (section:string) => void;
    search: string;
};


const NavBar: React.FC<Props> = ({openMenu, setSearch, setCartOpen, cartItems, filter, setFilter, search}) => {

    const [searchOpen, setSearchOpen] = useState(false);

    const openSearch = () => setSearchOpen(true);

    const closeSearch = () => setSearchOpen(false);


    const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

    const selectCategory = (category:string) => {
        setFilter(category);
        setSearch("");
        closeSearch();
    }

    return (
        <Wrapper position="fixed">
            <TopBanner />
            <div className="navBar">
                <div className="menubutton">
                    <Menu onClick={() => openMenu()}/>
                </div>
                <h2 onClick={() => selectCategory("")}>StrongBoot</h2>
                <ul className="categories">
                    <li onClick={() => selectCategory("women clothing")}
                        className={filter === "women clothing" ? "active" : ""}
                    >Woman</li>
                    <li onClick={() => selectCategory("men clothing")}
                        className={filter === "men clothing" ? "active" : ""}
                    >Man</li>
                    <li onClick={() => selectCategory("electronics")}
                        className={filter === "electronics" ? "active" : ""}
                    >Electronics</li>
                    <li onClick={() => selectCategory("jewelery")}
                        className={filter === "jewelery" ? "active" : ""}
                    >Jewelery</li>
                </ul>
                <div className="searchButton">
                    <Search onClick={() => openSearch()}/>
                </div>
                <StyledButton onClick={() => setCartOpen()}>
                    <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                        <AddShoppingCartIcon />
                    </Badge>
                </StyledButton>
            </div>
            <div className={`searchBar ${searchOpen ? "active" : ""}`}>
                <FormControl>
                    <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                    id="input-with-icon-adornment"
                    placeholder="Search"
                    value={search}
                    startAdornment={
                        <InputAdornment position="start">
                        <Search />
                        </InputAdornment>
                    }
                    />
                </FormControl>
                <Close onClick={() => closeSearch()} className="closeSearch"/>
            </div>
        </Wrapper>
        
    );
};

export default NavBar;