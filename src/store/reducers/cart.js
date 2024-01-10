import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setAddToCart: (state, action) => {
      const newItem = action.payload;
        state.cart.push({ ...newItem, qty: 1 });
    },
    setRemoveFromCart: (state, action) => {
      const newCart = state.cart.filter(
        (item) => item?.id !== action.payload?.id
      );
      state.cart = newCart;
    },
    setIncrementQtyCart: (state, action) => {
      const itemExists = state.cart.some(
        (item) => item.id === action.payload?.id
      );
      if (itemExists) {
        const newCart = state.cart.map((item) => ({
          ...item,
          qty: item?.id === action.payload?.id ? item?.qty + 1 : item?.qty,
        }));
        state.cart = newCart;
      } else {
        throw new Error("Please first add to cart");
      }
    },
    setDecrementQtyCart: (state, action) => {
      const newCart = state.cart.map((item) => ({
        ...item,
        qty:
          item?.id === action.payload?.id && item?.qty > 1
            ? item?.qty - 1
            : item?.qty,
      }));
      state.cart = newCart;
    },
    setInstructions: (state, action) => {
      state.cart[action?.payload?.index].instructions = action?.payload?.value;
    },
    resetCart: (state, action) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCart,
  resetCart,
  setAddToCart,
  setRemoveFromCart,
  setIncrementQtyCart,
  setDecrementQtyCart,
  setInstructions,
} = cartSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default cartSlice.reducer;
