import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  currentImg: '',
};

const popupSlice = createSlice({
  name: 'popup',
  initialState: initialState,
  reducers: {
    tooglePopupOpen(state, action) {
      state.isOpen = action.payload;
    },
    setCurrentImg(state, action) {
      state.currentImg = action.payload;
    },
  },
});

export const { tooglePopupOpen, setCurrentImg } = popupSlice.actions;

export default popupSlice.reducer;
