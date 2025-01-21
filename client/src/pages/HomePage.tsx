import {useEffect} from 'react';
import {useAppDispatch} from '../hooks/useRedux';
import {fetchProducts} from '../store/slices/fetchProducts';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return <div>Product List</div>;
};

export default HomePage;
