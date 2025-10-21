import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const get이름 = createAsyncThunk('이름/get이름', async () => {
    try {
        const res = await axios.get(`url`);
        return res.data;
    } catch (error) {
        return error.message;
    }
});

const initialState = {};

export const 이름Slice = createSlice({
    name: '이름',
    initialState,
    reducers: {
        xx: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder
            .addCase(get이름.pending, (state, action) => {})
            .addCase(get이름.fulfilled, (state, action) => {})
            .addCase(get이름.rejected, (state, action) => {});
    },
});

export const 이름Actions = 이름Slice.actions;
export default 이름Slice.reducer;
