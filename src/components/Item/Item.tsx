import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../../App';
//Styles
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <div className="main-card">
            <img src={item.image} alt={item.title} />
        </div>
        <div className="item-text">
            <Button onClick={() => handleAddToCart(item)} className="add-to-cart">Add to cart</Button>
            <div className="main-text">
                <h3 className="title">{item.title}</h3>
                <h3 className="price">${item.price}</h3>
            </div>
            <p className="description">{item.description}</p>
        </div>
  
    </Wrapper>
)

export default Item;