import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface homeState {
    bottomSectionWidth: number
};

const initialState: homeState = {
    bottomSectionWidth: 0
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setBottomSectionWidth(state, action: PayloadAction<number>) {
        state.bottomSectionWidth = action.payload
    }
  },
});

export default homeSlice.reducer;