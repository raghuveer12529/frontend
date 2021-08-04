import React, { useEffect} from "react";
import Product from "../Component/Product";
import MessageBox from "../Component/MessageBox";
import LoadingBox from "../Component/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const ProductList = useSelector((state) => state.productList );
  console.log('raghu');
  console.log(ProductList);
  const { loading, error , products} = ProductList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} exact></Product>
          ))}
        </div>
      )}
    </div>
  );
}
