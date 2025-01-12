import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type modalsType = "contact" | "photo" | "burger";

interface homeState {
  modals: { [key in modalsType]: boolean };
}

const initialState: homeState = {
  modals: {
    contact: false,
    photo: false,
    burger: false,
  },
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleModal(state, actions: PayloadAction<modalsType>) {
      state.modals[actions.payload] = !state.modals[actions.payload];
    },
    setIsOpenModal(state, actions: PayloadAction<modalsType>) {
      state.modals[actions.payload] = true;
    },
    setIsCloseModal(state, actions: PayloadAction<modalsType>) {
      state.modals[actions.payload] = false;
    },
    setIsStateModal(
      state,
      actions: PayloadAction<{ type: modalsType; state: boolean }>
    ) {
      state.modals[actions.payload.type] = actions.payload.state;
    },
  },
});

export default globalSlice.reducer;
