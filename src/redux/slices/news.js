import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://ac37e2da13755848.mokky.dev/news';

// Получение списка новостей/мероприятий
export const fetchNewsEvents = createAsyncThunk(
  'news/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Не удалось загрузить список';
      return rejectWithValue(message);
    }
  }
);

// Получение одной новости/мероприятия по ID
export const fetchNewsEventById = createAsyncThunk(
  'news/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Не удалось загрузить данные';
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  items: [],
  currentItem: null,
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearCurrentItem: (state) => {
      state.currentItem = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchNewsEvents
      .addCase(fetchNewsEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNewsEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // fetchNewsEventById
      .addCase(fetchNewsEventById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currentItem = null;
      })
      .addCase(fetchNewsEventById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentItem = action.payload;
      })
      .addCase(fetchNewsEventById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentItem } = newsSlice.actions;
export default newsSlice.reducer;