import { Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import Styles from "./styles.module.css";

function TruthQuestions() {
  const [truth, setTruth] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to fetch truth questions
  async function getTruthQuestions() {
    setLoading(true);
    try {
      const apiResponse = await fetch(
        "https://api.truthordarebot.xyz/v1/truth"
      );
      const truth = await apiResponse.json();
      setTruth(truth.question);
    } catch (e) {
      console.error(e);
      setTruth("❎ Error fetching questions. ❎");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box className={Styles.container}>
      <Typography variant="h4" className={Styles.heading}>
        TRUTH
      </Typography>
      <Button
        sx={{
          marginBottom: "30px",
          marginTop: "30px",
          borderRadius: "15px",
          backgroundColor: "white",
          color: "#024CAA",
          fontWeight: "bold",
        }}
        variant="outlined"
        className={Styles.button}
        onClick={getTruthQuestions}
        disabled={loading}
      >
        {loading ? "Please Wait ..." : `Get Truth Questions`}
      </Button>
      <Typography
        variant="p"
        className={Styles.questionText}
        style={{
          color:
            truth === "❎ Error fetching questions. ❎" ? "#FFD09B" : "white",
        }}
      >
        {truth?.length > 0
          ? truth
          : "Click the button to receive a truth question"}
      </Typography>
    </Box>
  );
}

export default TruthQuestions;
