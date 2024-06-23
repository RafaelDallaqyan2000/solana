import { SET_EUR } from "../types";

export const setEur = (eur: string) => ({
  type: SET_EUR,
  payload: eur,
});
