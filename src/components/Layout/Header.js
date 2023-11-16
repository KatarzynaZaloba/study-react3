import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import productImage from '../../assets/banner.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className="classes.header">
                <h1>ShopProducts</h1>
                <HeaderCartButton onClick={props.onshowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={productImage} alt="A table full of delicious food!"/>
            </div>
        </Fragment>
    );
};
export default Header;