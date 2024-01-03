import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  styled,
} from "@material-ui/core";
import React, { Component } from "react";

export default class InputSection extends Component {
  render() {
    return (
      <InputSectionStyle>
        <Box className="backgroundColor">
          <Grid container justifyContent="center">
            <Typography>How It Works</Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, libero?
            </Typography>
          </Grid>

          <Container>
            <Grid
              container
              spacing={5}
              justifyContent="center"
              style={{
                backgroundColor: "lightpink",
                marginTop: "12px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "8px",
              }}
            >
              <Grid item xs={12} md={3}>
                <TextField
                  id="outlined-basic"
                  label="Enter Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="outlined-basic"
                  label="Enter Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="outlined-basic"
                  label="Enter Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ padding: "16px 0px " }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </InputSectionStyle>
    );
  }
}
const InputSectionStyle = styled("div")({
  "& .backgroundColor": {
    backgroundColor: "rgb(72, 148, 135);",
    padding: "56px 0px",
    display: "grid",
    gap: "12px",
    alignItems: "center",
  },
  "& .inputbox": {
    display: "flex",
    background: "wheat",
    padding: "34px 32px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  "& .gridgap": {
    display: "grid",
    gridAutoFlow: "column",
    gap: "12px",
  },
  "& .inputfield": {
    fontSize: "18px",
    padding: "8px 32px",
    display: "grid",
    border: "rgb(185, 194, 192)",
    outline: "none",
    borderRadius: "8px",
  },
  "& .inputbtn": {
    padding: "8px 16px",
    borderRadius: "20px",
    outline: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  "& .bg": {
    background: "lightpink",
  },
});
