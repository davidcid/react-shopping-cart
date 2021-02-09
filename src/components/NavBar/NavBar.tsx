
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


//Styles
import { Wrapper, StyledButton } from './NavBar.styles';
//Types
import { CartItemType } from '../../App';

type Props = {
    setCartOpen: () => void;
    cartItems: CartItemType[];
    filter: string;
    setFilter: (section:string) => void;
};


const NavBar: React.FC<Props> = ({setCartOpen, cartItems, filter, setFilter}) => {

    const categories = {
        women: "women clothing",
        men: "men clothing",
        electronics: "electronics",
        jewelery: "jewelery"
    }


    const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

    return (
        <Wrapper position="static">
            <h2 onClick={() => setFilter("")}>StrongBoot</h2>
            <ul>
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
                <div className="searchIcon">
                    <SearchIcon />
                </div>
                <InputBase
                className="inputBase"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <StyledButton onClick={() => setCartOpen()}>
            <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                <AddShoppingCartIcon />
            </Badge>
            </StyledButton>
        </Wrapper>
    );
};

export default NavBar;