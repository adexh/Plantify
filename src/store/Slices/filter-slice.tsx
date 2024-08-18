import { AllItems } from "@/assets/Items";
import { ItemsType } from "@/types/itemsType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  FilterItems: ItemsType[];
};

const initialState = {
  FilterItems: AllItems,
};

type actionType = {
  type: string;
  payload?: any;
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setfilterAtoZ(state, action: PayloadAction<string>) {
      const { type } = action;
      switch (type) {
        default:
          return state;
      }
    },
  },
});
