import ProductCard from './ProductCard';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {fetchProducts} from '../../store/slices/fetchProducts';
import {useEffect} from 'react';

const ProductCardList = () => {
  const products = useAppSelector(state => state.products.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, products]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map(product => (
        <ProductCard
          key={product._id}
          id={product._id}
          imageUrl={product.imageUrl}
          name={product.name}
        />
      ))}
    </div>
  );
};

export default ProductCardList;
