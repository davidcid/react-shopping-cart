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
    cartItems: CartItemType[];
    filter: string;
    setFilter: (section:string) => void;
};


const NavBar: React.FC<Props> = ({openMenu, setCartOpen, cartItems, filter, setFilter}) => {

    const [searchOpen, setSearchOpen] = useState(false);

    const openSearch = () => setSearchOpen(true);

    const closeSearch = () => setSearchOpen(false);


    const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

    return (
        <Wrapper position="fixed">
            <TopBanner />
            <div className="navBar">
                <Menu onClick={() => openMenu()}/>
                <h2 onClick={() => setFilter("")}>StrongBoot</h2>
                <ul className="categories">
                    <li onClick={() => setFilter("women clothing")}
                        className={filter === "women clothing" ? "active" : ""}
                    >Woman</li>
                    <li onClick={() => setFilter("men clothing")}
                        className={filter === "men clothing" ? "active" : ""}
                    >Man</li>
                    <li onClick={() => setFilter("electronics")}
                        className={filter === "electronics" ? "active" : ""}
                    >Electronics</li>
                    <li onClick={() => setFilter("jewelery")}
                        className={filter === "jewelery" ? "active" : ""}
                    >Jewelery</li>
                </ul>
                <div className="search">
                    <Search onClick={() => openSearch()}/>
                </div>
                <StyledButton onClick={() => setCartOpen()}>
                    <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                        <AddShoppingCartIcon />
                    </Badge>
                </StyledButton>
            </div>
            <div className={`search ${searchOpen ? "active" : ""}`}>
                <FormControl>
                    <Input
                    id="input-with-icon-adornment"
                    placeholder="Search"
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