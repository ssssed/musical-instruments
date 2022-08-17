import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  currentImg: '',
  id: 0,
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
    setCurrentIdCard(state, action) {
      state.id = action.payload;
    },
  },
});

export const { tooglePopupOpen, setCurrentImg, setCurrentIdCard } =
  popupSlice.actions;

export default popupSlice.reducer;
