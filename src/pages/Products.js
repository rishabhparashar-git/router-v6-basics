import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/tablet">Tablet</Link>
        </li>
        <li>
          <Link to="/products/phone">Phone</Link>
        </li>
        <li>
          <Link to="/products/laptop">Laptop</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
