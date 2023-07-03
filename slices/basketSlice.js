import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const counterSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("can't remove product (id)");
      }

      state.items = newBasket;
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, clearBasket } =
  counterSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = createSelector(
  [selectBasketItems, (state, id) => id],
  (items, id) => items.filter((item) => item.id === id)
);

export const selectBasketTotal = createSelector(
  [selectBasketItems],
  (selectBasketItems) => {
    return selectBasketItems.reduce((total, item) => (total += item.price), 0);
  }
);

export default counterSlice.reducer;
