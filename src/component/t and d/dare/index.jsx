import { Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import Styles from "./styles.module.css";

function DareQuestions() {
  const [dare, setDare] = useState("");
  const [loading, setLoading] = useState(false);

  async function getDareQuestions() {
    setLoading(true);
    try {
      const apiResponse = await fetch("https://api.truthordarebot.xyz/v1/dare");
      const truth = await apiResponse.json();
      setDare(truth.question);
    } catch (e) {
      console.error(e);
      setDare("❎ Error fetching questions. ❎");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box className={Styles.container}>
      <Typography variant="h4" className={Styles.heading}>
        DARE
      </Typography>
      <Button
        sx={{
          marginBottom: "30px",
          marginTop: "30px",
          borderRadius: "15px",
          backgroundColor: "white",
          color: "#FF0000",
          fontWeight: "bold",
        }}
        variant="outlined"
        className={Styles.button}
        onClick={getDareQuestions}
        disabled={loading}
      >
        {loading ? "Please Wait ..." : `Get Dare Questions`}
      </Button>
      <Typography
        variant="p"
        className={Styles.questionText}
        style={{
          color:
            dare === "❎ Error fetching questions. ❎" ? "#FFD09B" : "white",
        }}
      >
        {dare?.length > 0
          ? dare
          : "Click the button to receive a dare question"}
      </Typography>
    </Box>
  );
}

export default DareQuestions;
