import Styles from "./styles.module.css";
import { colors, Typography } from "@mui/material";
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
      <Typography
        sx={{ wordSpacing: "30px" }}
        variant="p"
        className={Styles.title}
      >
        <span style={{ color: "#024caa" }}>Truth</span> &nbsp;or&nbsp;{" "}
        <span style={{ color: "#c41e3a" }}>Dare</span>
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
