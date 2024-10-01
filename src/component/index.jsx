import Styles from "./styles.module.css";
import { Typography } from "@mui/material";
import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Participants from "./participants";
import Questions from "./t and d";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function TruthAndDare() {
  return (
    <Fragment>
      <Typography variant="h1" className={Styles.title}>
        Truth or Dare
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Item>
              <Participants />
            </Item>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Item>
              <Questions />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default TruthAndDare;
