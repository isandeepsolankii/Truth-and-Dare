import { Box, Card, CardContent } from "@mui/material";
import DareQuestions from "./dare";
import TruthQuestions from "./truth";

function Questions() {
  return (
    <Box>
      <h3>Truth and dare Questions</h3>
      <Card>
        <CardContent>
          <TruthQuestions />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <DareQuestions />
        </CardContent>
      </Card>
    </Box>
  );
}

export default Questions;
