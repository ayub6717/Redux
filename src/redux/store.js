import { configureStore, createSlice } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import axios from 'axios';
import { api } from '../api/api';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(response.data));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
    posts: postsSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

