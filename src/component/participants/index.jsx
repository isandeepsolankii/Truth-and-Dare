import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { CardActions, colors } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import Styles from "./styles.module.css";
import Divider from "@mui/material/Divider";

function Participants() {
  // Manage an array of participant names
  const [participantName, setParticipantName] = useState("");
  const [participantList, setParticipantList] = useState([]);
  const [randomPerson, setRandomPerson] = useState("");

  function handleOnChange(event) {
    const { value } = event.target;
    setParticipantName(value); // Update the input value
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    if (participantName.trim() !== "") {
      // Add the participant to the list
      setParticipantList([...participantList, participantName]);
      // Clear the input field
      setParticipantName("");
    }
  }

  function handleOnSelectRandomClick() {
    const randomIndex = Math.floor(Math.random() * participantList.length);
    setRandomPerson(participantList[randomIndex]);
  }

  function handleOnEdit(participant) {
    console.log("edited");
    setParticipantName(participant);
    const updatedValue = participantList.filter(
      (currentParticipant) => currentParticipant !== participant
    );
    setParticipantList(updatedValue);
  }

  function handleOnDelete(participant) {
    console.log("Deleted");

    // Use filter to create a new array without the deleted participant
    const updatedList = participantList.filter(
      (currentParticipant) => currentParticipant !== participant
    );

    // Update the state with the new array
    setParticipantList(updatedList);
  }

  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ backgroundColor: "#789DBC" }} className={Styles.container}>
            <Typography
              sx={{ marginTop: "30px", marginBottom: "10px" }}
              variant="p"
              className={Styles.headingText}
            >
              Enter Participant Name
            </Typography>
            <Stack direction="column" spacing={2}>
              <TextField
                id="filled-basic"
                variant="filled"
                sx={{
                  border: "none",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                style={{ marginTop: "30px" }}
                type="text"
                name="name"
                placeholder="Enter Participant's Name"
                value={participantName} // Set input value from state
                onChange={handleOnChange}
              />

              <CardActions>
                {participantName?.length === 0 ? (
                  <Button
                    sx={{
                      borderRadius: "15px",
                      fontWeight: "bold",
                    }}
                    variant="outlined"
                    startIcon={<AddIcon />}
                    disabled
                  >
                    Add Participant
                  </Button>
                ) : (
                  <Button
                    sx={{
                      borderRadius: "15px",
                      fontWeight: "bold",
                      backgroundColor: "#024caa",
                    }}
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleOnSubmit}
                  >
                    Add Participant
                  </Button>
                )}
              </CardActions>
            </Stack>
          </Box>
        </CardContent>

        <CardContent>
          <Box sx={{ backgroundColor: "#789DBC" }} className={Styles.container}>
            <Typography variant="p" className={Styles.headingText}>
              Participants Are:
            </Typography>

            {/* Scrollable List */}
            <List
              sx={{
                height: "250px",
                overflowY: "auto", // Allow vertical scrolling
                marginBottom: "20px", // Create space between list and button

                // Custom scrollbar styles
                "::-webkit-scrollbar": {
                  width: "8px", // Adjust scrollbar width
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "#888", // Color of the scrollbar thumb
                  borderRadius: "10px", // Round edges for better aesthetics
                },
                "::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#555", // Darker color on hover
                },
              }}
            >
              {participantList.length > 0 ? (
                participantList.map((participant, index) => (
                  <div key={index}>
                    <ListItem>
                      <ListItemText>
                        {/* Use Flexbox for name and buttons */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          {/* Name takes remaining space */}
                          <Typography
                            variant="p"
                            className={Styles.namesText}
                            style={{ flex: 1, marginRight: "10px" }} // Name gets flex space and margin
                          >
                            {participant}
                          </Typography>

                          {/* Buttons */}
                          <div style={{ display: "flex", gap: "10px" }}>
                            <Button
                              sx={{
                                borderRadius: "15px",
                                fontWeight: "bold",
                                backgroundColor: "white",
                                color: "#024caa",
                              }}
                              variant="outlined"
                              style={{ margin: 10 }} // Reduced maxWidth for better responsiveness
                              startIcon={<EditIcon />}
                              onClick={() => handleOnEdit(participant)}
                            ></Button>
                            <Button
                              sx={{
                                borderRadius: "15px",
                                fontWeight: "bold",
                                backgroundColor: "white",
                                color: "#c41e3a",
                              }}
                              variant="outlined"
                              style={{ margin: 10 }} // Reduced maxWidth for better responsiveness
                              startIcon={<DeleteIcon />}
                              onClick={() => handleOnDelete(participant)}
                            ></Button>
                          </div>
                        </div>
                      </ListItemText>
                    </ListItem>
                    <Divider />
                  </div>
                ))
              ) : (
                <Typography
                  variant="p"
                  className={Styles.headingText}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "15%",
                    left: "10%",
                  }}
                >
                  No participants added yet
                </Typography>
              )}
            </List>

            {/* Shuffle Button at the Bottom */}
            {participantList.length > 1 && (
              <Button
                sx={{
                  borderRadius: "15px",
                  fontWeight: "bold",
                  backgroundColor: "white",
                  color: "#c41e3a",
                }}
                variant="outlined"
                startIcon={<ShuffleIcon />}
                onClick={handleOnSelectRandomClick}
              >
                Select a Person
              </Button>
            )}
          </Box>
        </CardContent>

        <CardContent>
          <Box sx={{ backgroundColor: "#789DBC" }} className={Styles.container}>
            {randomPerson.length > 0 ? (
              <Typography variant="p" className={Styles.headingText}>
                It's Your Turn{" "}
                <span style={{ color: "#c41e3a" }}>
                  <strong>{randomPerson.toUpperCase()}</strong>
                </span>
                , Select Truth or Dare
              </Typography>
            ) : (
              <Typography variant="p" className={Styles.headingText}>
                Select a Person First
              </Typography>
            )}
          </Box>
        </CardContent>
      </Box>
    </>
  );
}

export default Participants;
