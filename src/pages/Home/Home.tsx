import "./homeStyles.css";
import { CurrencyConverter } from "../../Components";
import { Box } from "@mui/material";

export function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CurrencyConverter />
    </Box>
  );
}
