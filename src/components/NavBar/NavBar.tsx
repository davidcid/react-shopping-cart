
import TopBanner from '../TopBanner/TopBanner';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


//Styles
import { Wrapper, StyledButton, Search, Menu } from './NavBar.styles';
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
                    <Search />
                </div>
                <StyledButton onClick={() => setCartOpen()}>
                    <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                        <AddShoppingCartIcon />
                    </Badge>
                </StyledButton>
            </div>
        </Wrapper>
        
    );
};

export default NavBar;