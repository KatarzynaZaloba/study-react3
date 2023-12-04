import './App.css';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import { useState} from 'react';
import CartProvider from "./store/CartProvider";
import Products from './components/Products/Products';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onshowCart={showCartHandler}/>
            <main>
                <Products />
            </main>
        </CartProvider>
    );
}

export default App;
