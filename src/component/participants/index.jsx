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
import { CardActions } from "@mui/material";
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
  const [participantsName, setParticipantsName] = useState("");
  const [participantsList, setParticipantsList] = useState([]);
  const [randomPerson, setRandomPerson] = useState("");

  function handleOnChange(event) {
    const { value } = event.target;
    setParticipantsName(value); // Update the input value
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    if (participantsName.trim() !== "") {
      // Add the participant to the list
      setParticipantsList([...participantsList, participantsName]);
      // Clear the input field
      setParticipantsName("");
    }
  }

  function handleOnClick() {
    const randomIndex = Math.floor(Math.random() * participantsList.length);
    setRandomPerson(participantsList[randomIndex]);
  }

  function handleOnEdit(participant) {
    console.log("edited");
    setParticipantsName(participant);
    const updatedValue = participantsList.filter(
      (currentParticipant) => currentParticipant !== participant
    );
    setParticipantsList(updatedValue);
  }

  function handleOnDelete(participant) {
    console.log("Deleted");

    // Use filter to create a new array without the deleted participant
    const updatedList = participantsList.filter(
      (currentParticipant) => currentParticipant !== participant
    );

    // Update the state with the new array
    setParticipantsList(updatedList);
  }
  const style = {
    py: 0,
    width: "100%",
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" className={Styles.cardStyling}>
          <CardContent>
            <Typography variant="p" className={Styles.title}>
              Enter Participants Name
            </Typography>
            <Stack direction="column" spacing={2}>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                type="text"
                name="name"
                placeholder="Enter Participant's Name"
                value={participantsName} // Set input value from state
                onChange={handleOnChange}
              />
              <CardActions>
                {participantsName?.length === 0 ? (
                  <Button variant="contained" startIcon={<AddIcon />} disabled>
                    Add Participants
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleOnSubmit}
                  >
                    Add Participants
                  </Button>
                )}
              </CardActions>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" className={Styles.cardStyling}>
          <CardContent>
            <Typography variant="h4">Participants Are:</Typography>

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
              {participantsList.length > 0 ? (
                participantsList.map((participant, index) => (
                  <div key={index}>
                    <ListItem>
                      <ListItemText primary={participant}></ListItemText>
                      <Button
                        variant="outlined"
                        style={{ margin: 10 }}
                        startIcon={<EditIcon />}
                        onClick={() => handleOnEdit(participant)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        style={{ margin: 10 }}
                        startIcon={<DeleteIcon />}
                        onClick={() => handleOnDelete(participant)}
                      >
                        Delete
                      </Button>
                    </ListItem>
                    <Divider />
                  </div>
                ))
              ) : (
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  No participants added yet
                </Typography>
              )}
            </List>

            {/* Shuffle Button at the Bottom */}
            {participantsList.length > 1 && (
              <Button
                variant="outlined"
                startIcon={<ShuffleIcon />}
                onClick={handleOnClick}
              >
                Select a Person
              </Button>
            )}
          </CardContent>
        </Card>

        <Card variant="outlined" className={Styles.cardStyling}>
          <CardContent>
            {randomPerson.length > 0 ? (
              <Typography variant="p">
                It's Your Turn <strong>{randomPerson}</strong>, Select Truth or
                Dare
              </Typography>
            ) : (
              <Typography variant="p">Select a Person First</Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Participants;
