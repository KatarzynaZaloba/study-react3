import classes from "./AvailableProducts.module.css";

const LIST_OF_PRODUCTS = [
    {
        id: 'p1',
        name: 'sushi',
        description: 'Finest fish and veggies',
        price: 22.33
    },
    {
        id: 'p2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5
    },
    {
        id: 'p3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99
    },
    {
        id: 'p4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99
    },
];

const AvailableProducts = () => {
    const productsList = LIST_OF_PRODUCTS.map((product) => <li key={product.id}>{product.name}</li>);
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>{productsList}</ul>
        </section>
    );
};
export default AvailableProducts;