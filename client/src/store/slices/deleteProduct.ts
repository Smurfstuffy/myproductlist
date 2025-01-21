import {createAsyncThunk} from '@reduxjs/toolkit';

export const deleteProduct = createAsyncThunk<
  string,
  string,
  {rejectValue: string}
>('products/deleteProduct', async function (id, {rejectWithValue}) {
  const response = await fetch(`http://localhost:4000/product/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    return rejectWithValue('Cannot delete a product. Server error.');
  }

  return id;
});
