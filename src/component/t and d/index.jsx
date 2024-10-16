import { Box, Card, CardContent, Typography } from "@mui/material";
import DareQuestions from "./dare";
import TruthQuestions from "./truth";
import Styles from "./styles.module.css";

function Questions() {
  return (
    <Box>
      <Typography
        sx={{ marginTop: "30px", marginBottom: "10px" }}
        variant="h4"
        className={Styles.heading}
      >
        Truth and Dare Questions
      </Typography>
      <CardContent>
        <TruthQuestions />
      </CardContent>
      <CardContent>
        <DareQuestions />
      </CardContent>
    </Box>
  );
}

export default Questions;
