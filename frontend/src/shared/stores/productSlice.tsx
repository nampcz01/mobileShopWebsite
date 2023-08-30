import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDetailProduct } from '../types/product.type';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface APPSTATE {
  products: IDetailProduct[];
  count: number;
}

const initialState: APPSTATE = {
  products: [],
  count: 0,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IDetailProduct>) => {
      state.products.push(action.payload);
      state.count += 1;
    },
    
    updateProduct: (state, action: PayloadAction<IDetailProduct>) => {
      const updatedProduct = action.payload;
      state.products = state.products.map(product => {
        if (product.productId === updatedProduct.productId) {
          return updatedProduct;
        }
        return product;
      });
    },
    
    removeProduct: (state, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter(product => product.productId !== productIdToRemove);
      state.count = 0;
    },
  },
});

const persistConfig = {
  key: `${process.env.NEXT_PUBLIC_APP_NAME}`,
  storage,
};

const persistedProductSlice = persistReducer(persistConfig, productSlice.reducer);

export const { addProduct, removeProduct, updateProduct } = productSlice.actions;

export default persistedProductSlice;
