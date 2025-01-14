import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verb';
import {ALL_CATEGORIES, ALL_PRODUCTS} from '../../service/uri';

const getCategories = createAsyncThunk(
  'categories/getCategories',
  async params => {
    const url = `${ALL_PRODUCTS}/${ALL_CATEGORIES}`;
    const response = await getRequest(url, params);
    return response.data;
  },
);

export {getCategories};
