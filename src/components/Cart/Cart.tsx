import CartItem from '../CartItem/CartItem';
import CloseIcon from '@material-ui/icons/Close';
// Styles
import { Wrapper } from './Cart.styles';
// Types
import { CartItemType } from '../../App';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    closeCart: () => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, closeCart }) => {

    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <Wrapper>
            <div className="header">
                <CloseIcon onClick={() => closeCart()} className="close"/>
                <h2>Your Shopping Cart</h2>
            </div>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2 className="total">Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    );
};

export default Cart;