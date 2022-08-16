import popupSlice from './popupSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    popup: popupSlice,
  },
});

export default store;
