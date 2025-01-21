import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from '../../types/store';

export const addProduct = createAsyncThunk<
  Product,
  Product,
  {rejectValue: string}
>('products/addProduct', async function (product, {rejectWithValue}) {
  const response = await fetch('http://localhost:4000/product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    return rejectWithValue('Cannot add a product. Server error.');
  }

  return (await response.json()) as Product;
});
