import { useSelector, useDispatch } from "react-redux";
import { Container, TextField, Grid } from "@mui/material";
import { setEur, setUsd } from "../../store/actions";

export function CurrencyConverter() {
  const { usd, eur }: any = useSelector((state: any) => state.reducer);
  const dispatch = useDispatch();

  const handleUsdChange = (e: any) => {
    const value = e.target.value;

    if (!isNaN(value) && value !== "") {
      dispatch(setUsd(value));
    } else {
      dispatch(setUsd(""));
    }
  };

  const handleEurChange = (e: any) => {
    const value = e.target.value;

    if (!isNaN(value) && value !== "") {
      dispatch(setEur(value));
    } else {
      dispatch(setEur(""));
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3} direction={{ xs: "column", sm: "row" }}>
        <Grid item xs={12} sm={6}>
          <label form="usdField">
            USD
            <TextField
              id="usdField"
              variant="standard"
              fullWidth
              value={usd}
              onChange={handleUsdChange}
              placeholder="Введите сумму"
            />
          </label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <label form="eurField">
            EUR
            <TextField
              id="eurField"
              variant="standard"
              fullWidth
              value={eur}
              onChange={handleEurChange}
              placeholder="Введите сумму"
            />
          </label>
        </Grid>
      </Grid>
    </Container>
  );
}
