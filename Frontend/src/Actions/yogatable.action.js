import * as apiServices from "../Services/apiServices";
import request from "../Services/requestService";
import { YOGA_ACTION } from "../constant";
import { get } from "lodash";

export const yogaTableAction = (requestMethod = request) => {
  return function(dispatch) {
    dispatch({
      type: YOGA_ACTION.YOGA_START
    });
    return requestMethod(apiServices.yogaTable())
      .then(resp => {
        const data = get(resp, "data");
        console.log('Dataaaa',data)
        dispatch({
          type: YOGA_ACTION.YOGA_SUCCESS,
          data
        });
      })
      .catch(() => {
        dispatch({
          type: YOGA_ACTION.YOGA_FAILURE
        });
      });
  };
};