import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let accountSlice = createSlice({
  name: "account",
  initialState: {
    checkSignIn: false,
    inDex: null,
    profile: [],
  },

  reducers: {
    setCheckSignIn: (state, { payload }) => {
      state.checkSignIn = payload;
    },
    setIndexUser: (state, { payload }) => {
      state.inDex = payload;
    },
    editProfile: (state, action) => {
      let index = action.payload[0];
      let objN = action.payload[1];

      state.profile.splice(index, 1, objN);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUser.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(updatePro.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.profile = payload;
      });
  },
});

export const fetchAllUser = createAsyncThunk(
  "account/fetchAllUser",
  async () => {
    const response = await axios.get(`http://localhost:3000/api/users`);
    return response.data;
  }
);

export const updatePro = createAsyncThunk(
  "account/fetchUpdatePro",
  async (data) => {
    let arr = data.Arr;
    let obj = data.Obj;
    // console.log("Arr: ", arr);
    // console.log("Obj: ", obj);
    const response = await axios.put(
      `http://localhost:3000/api/users/update`,
      obj
    );
    // console.log(response.data);
    return response.data;
  }
);

export default accountSlice;
