import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../constats';

export const sendFeedback = createAsyncThunk('user/sendFeedback', async (data, thunkAPI) => {
	try {
		const res = await axios.post(
			`${BASE_URL}/feedback/`,
			{
				first_name: data.first_name,
				last_name: data.last_name,
				phone_number: data.phone_number,
			},
			{
				headers: { 'Content-Type': 'application/json' },
			},
		);
		return res.data;
	} catch (err) {
		return thunkAPI.rejectWithValue(err);
	}
});

export const getRooms = createAsyncThunk('user/getRooms', async (data, thunkAPI) => {
	try {
		const res = await axios.post(
			`${BASE_URL}/rooms/`,
			{
				start_date: data.start_date,
				end_date: data.end_date,
				persons: data.persons,
				type: data.type,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		return res.data;
	} catch (err) {
		return thunkAPI.rejectWithValue(err);
	}
});

export const sendBook = createAsyncThunk('user/sendBook', async (data, thunkAPI) => {
	try {
		const res = await axios.post(
			`${BASE_URL}/book/`,
			{
				first_name: data.first_name,
				last_name: data.last_name,
				phone_number: data.phone_number,
				comment: data.comment,
				start_date: data.start_date,
				end_date: data.end_date,
				amount: data.amount,
				type: data.type,
				nights: data.nights,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		return res.data;
	} catch (err) {
		return thunkAPI.rejectWithValue(err);
	}
});

export const selectRoom = createAction('SELECT-ROOM');
export const clearRooms = createAction('CLEAR-ROOMS');
export const clearStatus = createAction('CLEAR-STATUS');

const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: null,
		isLoading: false,
		isError: false,
		isSuccess: false,
		selectedRoomData: {},
	},
	extraReducers: (builder) => {
		builder.addCase(sendFeedback.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
			state.isSuccess = false;
		});
		builder.addCase(sendFeedback.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = true;
		});
		builder.addCase(sendFeedback.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
			state.isSuccess = false;
		});

		builder.addCase(getRooms.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
			state.isSuccess = false;
		});
		builder.addCase(getRooms.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
			state.isError = false;
			state.isSuccess = true;
		});
		builder.addCase(getRooms.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
			state.isSuccess = false;
		});

		builder.addCase(sendBook.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
			state.isSuccess = false;
		});
		builder.addCase(sendBook.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = true;
		});
		builder.addCase(sendBook.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
			state.isSuccess = false;
		});

		builder.addCase(selectRoom, (state, action) => {
			state.selectedRoomData = action.payload;
		});

		builder.addCase(clearRooms, (state) => {
			state.data = null;
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
		});

		builder.addCase(clearStatus, (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
		});
	},
});

export default userSlice.reducer;
