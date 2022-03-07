import { configureStore, createSlice } from "@reduxjs/toolkit";
const appState = {
  Items: [],
  search: "Mens ",
};
const appStore1 = createSlice({
  name: "appstore1",
  initialState: appState,
  reducers: {
    Set_search_text(state, action) {
      state.search = action.payload;
    },
    add_Item_To_Card(state, action) {
      state.Items.push({ ...action.payload, amount: 1 });
    },
    Remove_Item_from_Basket(state, action) {
      const newItems = state.Items.filter((item) => {
        return item.id !== action.payload;
      });
      state.Items = newItems;
    },
    increase_qunatity_of_item(state, action) {
      const itemIndex = state.Items.findIndex((item) => {
        return item.id == action.payload;
      });
      state.Items[itemIndex].amount = state.Items[itemIndex].amount + 1;
    },
    Dedcrease_qunatity_of_item(state, action) {
      const itemIndex = state.Items.findIndex((item) => {
        return item.id == action.payload;
      });
      if (state.Items[itemIndex].amount > 1) {
        state.Items[itemIndex].amount = state.Items[itemIndex].amount - 1;
      }
    },
    Remove_All_Item_from_Basket(state) {
      state.Items = [];
    },
  },
});
const store = configureStore({
  reducer: appStore1.reducer,
});
export const Action1 = appStore1.actions;
export default store;
