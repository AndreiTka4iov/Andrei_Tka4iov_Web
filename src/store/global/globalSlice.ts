import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface homeState {
  contactModal: boolean;
  burgerMenu: boolean;
}

const initialState: homeState = {
  contactModal: false,
  burgerMenu: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleContactModal(state) {
      state.contactModal = !state.contactModal;
    },
    toggleBurgerMenu(state) {
      state.burgerMenu = !state.burgerMenu;
    },
  },
});

export default globalSlice.reducer;
