import slips from "../../Data/Slips";
import * as Types from "../constants/actionTypes";

const initialState = {
  slips: [/*{employeeTo,amount}*/],
  shiftData: {}
};

const slipReducer = (state = initialState, action) => {
  let slips

  switch (action.type) {
    case Types.ADD_SLIP:
      console.log("add slip", action.payload);
      slips = [...state.slips]
      let existed = false;
      
      slips.forEach(slip => {
        if (slip.employeeTo === action.payload.employeeTo) {
          slip.amount = action.payload.amount
          existed = true
        }
      })

      if (!existed) slips.push(action.payload)

      return { ...state, slips };

    case Types.DELETE_SLIP:
      console.log("delete slip", action.type , " ",  action.payload);
     slips = [...state.slips].filter(slip => {
         return slip.employeeTo !== action.payload.employeeTo
      })
      console.log(slips)
      return { ...state, slips };

    case Types.SET_SHIFT_DATA:
      console.log("set shift data", action.payload);
      return {
        ...state,
        shiftData: action.payload,
      };
      
    default:
      return state;
  }
};

export default slipReducer;