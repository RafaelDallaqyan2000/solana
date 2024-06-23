import { SET_USD } from "../types";

export const setUsd = (usd: string) => ({
  type: SET_USD,
  payload: usd,
});
