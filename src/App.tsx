import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

// Styles
import { Wrapper }  from './App.styles';
//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', 
    getProducts
  );
  console.table(data);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item => 
          item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1}
          : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1}];
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1}];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[]) 
    ))
  };

  const openCart = () => setCartOpen(true);
  

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;





  return (
    <div className="div">
      <NavBar 
        setCartOpen={openCart} 
        cartItems={cartItems} 
        filter={filter} 
        setFilter={setFilter}
      />
      <Wrapper>
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart 
            cartItems={cartItems} 
            addToCart={handleAddToCart} 
            removeFromCart={handleRemoveFromCart}  
          />
        </Drawer>

        <Grid container spacing={3}>
          {data?.filter(item => (
            filter === "" 
            ? item.category.includes(filter) 
            : item.category === filter
          )).map((item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          )))}
        </Grid>
      </Wrapper>
    </div>

  )
}

export default App;
