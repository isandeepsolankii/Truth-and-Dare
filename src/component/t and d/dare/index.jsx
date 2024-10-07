import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Styles from "./styles.module.css";

function DareQuestions() {
  const [dare, setDare] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to fetch dare questions
  async function getDareQuestions() {
    setLoading(true);
    try {
      const apiResponse = await fetch("https://api.truthordarebot.xyz/v1/dare");
      const dare = await apiResponse.json();
      setDare(dare.question);
    } catch (e) {
      console.error(e);
      setDare("Error fetching questions.");
    } finally {
      setLoading(false);
    }
  }

  function handleOnClick() {
    getDareQuestions();
  }
  return (
    <div>
      <Typography variant="h3">DARE</Typography>
      <Button variant="outlined" onClick={handleOnClick} disabled={loading}>
        {loading ? "Please Wait ..." : `Get Dare question`}
      </Button>
      <Typography variant="h2">
        {dare?.length > 0 ? dare : "Please Click on button to get Questions"}
      </Typography>
    </div>
  );
}

export default DareQuestions;
