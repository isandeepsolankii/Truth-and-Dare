import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
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
      setTruth("Error fetching questions.");
    } finally {
      setLoading(false);
    }
  }

  // Function to toggle between truth and dare
  function handleOnClick() {
    getTruthQuestions();
  }
  return (
    <div>
      <Typography variant="h3">TRUTH</Typography>
      <Button variant="outlined" onClick={handleOnClick} disabled={loading}>
        {loading ? "Please Wait ..." : `Get truth question`}
      </Button>
      <Typography variant="h2">
        {truth?.length > 0 ? truth : "Please Click on button to get Questions"}
      </Typography>
    </div>
  );
}

export default TruthQuestions;
