import './App.css';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import {Fragment, useState} from 'react';

//import Products from './components/Products/Products';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <Fragment>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onshowCart={showCartHandler}/>
            <main>
                {/*<Products />*/}
            </main>
        </Fragment>
    );
}

export default App;
