import * as Types from "../constants/actionTypes";

export const setEmail = (email) => ({
  type: Types.SET_EMAIL,
  payload: { email },
});
export const setPassword = (password) => ({
  type: Types.SET_PASSWORD,
  payload: { password },
});
export const addSlip = ({employeeTo,amount}) => ({
  type: Types.ADD_SLIP,
  payload: {employeeTo,amount},
});

export const deleteSlip = ({employeeTo}) => ({
  type: Types.DELETE_SLIP,
  payload: {employeeTo},
});

export const setShiftData = ({totalSales, tipsReceived, foodSales, liquorSales}) => ({
  type: Types.SET_SHIFT_DATA,
  payload: {totalSales, tipsReceived, foodSales, liquorSales},
});

