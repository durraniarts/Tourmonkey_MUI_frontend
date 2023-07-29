import React from "react";
import TourCard from "../components/TourCard";
import { Container, Grid, Typography } from "@mui/material";

import cities from "../data.json";
export default function Home() {
  return (
    <>
      <Container>
        {cities.map((city) => (
          <div key={city.id}>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <TourCard tour={tour} key={tour.id} />
              ))}
            </Grid>
          </div>
        ))}
        {/* <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid> */}
      </Container>
    </>
  );
}
