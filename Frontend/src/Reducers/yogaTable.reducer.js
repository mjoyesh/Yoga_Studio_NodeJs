import { YOGA_ACTION, STATUS } from "../constant";

const initState = {
  data: [],
  yogaStatus: null
}

export default function yogaTableReducer(state = initState, action) {
  switch(action.type){
    case YOGA_ACTION.YOGA_START:
      return{ 
        ...state, 
        yogaStatus: STATUS.LOADING
      };
    case YOGA_ACTION.YOGA_SUCCESS:
      return {
        ...state,
        data: action.data,
        yogaStatus: STATUS.SUCCESS,
      };
    case YOGA_ACTION.YOGA_FAILURE:
      return {
        ...state, 
        yogaStatus: STATUS.ERROR
      }
    case YOGA_ACTION.YOGA_CLEAR: 
      return{
        ...state,
        data: null,
        yogaStatus: STATUS.CLEAR
      }
    default: 
      return state;
  }
}