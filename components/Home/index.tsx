import { Grid, Typography } from "@mui/material";
import { LinkButtons } from "../LinkButtons";

export const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">Home Page</Typography>
      </Grid>
      <Grid item xs={12}>
        <LinkButtons />
      </Grid>
    </Grid>
  );
};
