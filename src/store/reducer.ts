import { HANDLE_REDUX_CHANGE, SET_EUR, SET_USD } from "./types";

const initialState = {
  usd: "",
  eur: "",
};

const ExchangeRate = 1.07;

type HandleChangeType = {
  type: string;
  payload: any;
};

const reducer = (state = initialState, action: HandleChangeType) => {
  switch (action.type) {
    case HANDLE_REDUX_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case SET_USD:
      return {
        ...state,
        usd: action.payload,
        eur:
          action.payload !== ""
            ? (parseFloat(action.payload) / ExchangeRate).toFixed(2)
            : "",
      };
    case SET_EUR:
      return {
        ...state,
        eur: action.payload,
        usd:
          action.payload !== ""
            ? (parseFloat(action.payload) * ExchangeRate).toFixed(2)
            : "",
      };

    default:
      return state;
  }
};

export default reducer;
