import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3vFyhCKT7BHkc1CWchtM/books';
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed');
    }
  },
);

export const addBook = createAsyncThunk(
  'addBooks/addBook',
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post(baseURL, bookData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Post request failed');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseURL}/${itemId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Could not delete book');
    }
  },
);
const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(addBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(addBook.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(removeBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(removeBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(removeBook.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default booksSlice.reducer;
