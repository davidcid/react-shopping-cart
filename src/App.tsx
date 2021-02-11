import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu';
import NavBar from './components/NavBar/NavBar';
import FinalSales from './components/FInalSales/FinalSales';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';


// Styles
import { Wrapper }  from './App.styles';
import { Container } from '@material-ui/core';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
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

  const closeCart = () => setCartOpen(false);
  
  const openMenu = () => setMenuOpen(true);
  
  const closeMenu = () => setMenuOpen(false);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;


  return (
    <div className="app">
      <NavBar 
        setCartOpen={openCart} 
        cartItems={cartItems} 
        filter={filter} 
        setFilter={setFilter}
        openMenu={openMenu}
        setSearch={setSearch}
        search={search}
      />
      <Wrapper>
        {
          filter === "" && 
          <div className="mainPage">
            <FinalSales setFilter={setFilter} />
            <Hero setFilter={setFilter} />
          </div>
        }
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart 
            cartItems={cartItems} 
            addToCart={handleAddToCart} 
            removeFromCart={handleRemoveFromCart}
            closeCart={closeCart}
          />
        </Drawer>
        <Drawer anchor='left' open={menuOpen} onClose={() => setMenuOpen(false)}>
          <Menu setFilter={setFilter} filter={filter} closeMenu={closeMenu}/>
        </Drawer>
        <Container className="articles">
          <Grid container spacing={4}>
            {data?.filter(item => (
              search !== "" 
              ? item.title.toLowerCase().includes(search.toLowerCase())              
              : filter === "" 
              ? item.category.includes(filter) 
              : item.category === filter
            )).map((item => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                <Item item={item} handleAddToCart={handleAddToCart} />
              </Grid>
          )))}
        </Grid>
        </Container>
      </Wrapper>
      <Footer />
    </div>

  )
}

export default App;
