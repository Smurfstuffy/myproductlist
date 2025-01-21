import {createSlice, AnyAction, PayloadAction} from '@reduxjs/toolkit';
import {ProductState} from '../../types/store';
import {fetchProducts} from './fetchProducts';
import {addProduct} from './addProduct';
import {editProduct} from './editProduct';
import {deleteProduct} from './deleteProduct';

const initialState: ProductState = {
  list: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(addProduct.pending, state => {
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          product => product._id === action.payload._id,
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.list = state.list.filter(
          product => product._id !== action.payload,
        );
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
