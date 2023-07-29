import React, { useEffect } from "react";
import { Box, Container, Grid, Paper, Rating, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

export default function TourCard({ tour }) {
  const rating = tour.rating;
  const reviewsNumber = tour.numberOfReviews;
  const price = tour.price;
  const img = tour.image;
  const tourTitle = tour.name;
  const duration = tour.duration;

  // useEffect(() => {
  //   console.log("updated");
  // });

  return (
    <>
      <Grid item xs={6} lg={3}>
        <ThemeProvider theme={theme}>
          <Paper elevation={3}>
            <Link to="/explore_section">
              <img
                className="img"
                src={img}
                // width={550}
                alt="picture"
              />
            </Link>
            <Box paddingX={1}>
              <Typography variant="subtitle1" component="h2">
                {tourTitle}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ fontSize: "15px", marginRight: "5px" }} />
                <Typography variant="body2" component="p">
                  {duration} hours
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                  marginTop: "1.5rem",
                }}
              >
                <Rating
                  name="read-only"
                  readOnly
                  value={rating}
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {rating}
                </Typography>
                <Typography variant="body2" component="p" marginLeft={2}>
                  ({reviewsNumber} reviews)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" component="h3" marginTop={1}>
                  From C ${price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Grid>
    </>
  );
}
