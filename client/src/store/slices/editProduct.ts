import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product, ProductState} from '../../types/store';

export const editProduct = createAsyncThunk<
  Product,
  string,
  {rejectValue: string; state: {products: ProductState}}
>('products/editProduct', async function (id, {rejectWithValue, getState}) {
  const product = getState().products.list.find(product => product._id === id);

  if (!product) {
    return rejectWithValue('No product with such an id to edit.');
  }

  const response = await fetch(`http://localhost:4000/product/${id}`, {
    method: 'PUT',
    headers: {
      'Contet-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    return rejectWithValue('Cannot edit product. Server error.');
  }

  return (await response.json()) as Product;
});
