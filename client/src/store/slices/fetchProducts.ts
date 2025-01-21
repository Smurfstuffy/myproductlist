import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from '../../types/store';

export const fetchProducts = createAsyncThunk<
  Product[],
  undefined,
  {rejectValue: string}
>('products/fetchProducts', async function (_, {rejectWithValue}) {
  const response = await fetch('http://localhost:4000/product');

  if (!response.ok) {
    return rejectWithValue('Server Error');
  }

  const data = await response.json();
  return data.data;
});
