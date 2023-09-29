import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../constats';

export const sendFeedback = createAsyncThunk('user/sendFeedback', async (data, thunkAPI) => {
	try {
		const res = await axios.post(
			`${BASE_URL}/feedback/`,
			{ first_name: data.firstName, last_name: data.lastName, phone_number: data.phoneNumber },
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
		const res = await axios.get(
			`${BASE_URL}/rooms/`,
			{
				start_date: data.startDate,
				end_date: data.endDate,
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
				phone_humber: data.phone_number,
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

const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: { standart: 0, luxe: 1, luxeplus: 1, luxepremium: 0 },
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
			console.log(action.payload);
			state.selectedRoomData = action.payload;
		});

		builder.addCase(clearRooms, (state) => {
			state.data = null;
		});
	},
});

export default userSlice.reducer;
