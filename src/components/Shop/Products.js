import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Book",
    description: "My First Book",
  },
  {
    id: "p2",
    price: 10,
    title: "Book2",
    description: "My Second Book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
