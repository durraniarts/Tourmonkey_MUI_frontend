import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import React from "react";
import ImageCollage from "../components/imageCollage";
import Accordian from "../components/Accordian";
import BasicModal from "../components/BasicModals";

export default function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1">
        Explore the world
      </Typography>
      <Box marginTop={3} sx={{ display: "flex", justifyItems: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1686956222311-2e1bb5bb1b0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          height={350}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni et
          dolore magna aliqu lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut eni et dolore magna aliqu dolore magna aliqu lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut eni et dolore magna
          aliqu
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently Asked Questions
        </Typography>
        <Accordian />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
