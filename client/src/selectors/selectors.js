import { createSelector } from "@reduxjs/toolkit";

export const accountSelector = (state) => state.accountSlice.profile;
export const SignInSelector = (state) => state.accountSlice.checkSignIn;
export const inDexUserSelector = (state) => state.accountSlice.inDex;

export const getUserSelector = createSelector(
  accountSelector,
  inDexUserSelector,
  (listUser, index) => {
    return listUser.filter((item, i) => {
      return index != null && index == i;
    });
  }
);
