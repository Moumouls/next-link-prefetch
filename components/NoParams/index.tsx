import { Grid, Typography } from "@mui/material";
import { LinkButtons } from "../LinkButtons";
import largeJSON from "../large.json";

export const NoParams = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">NoParams Page</Typography>
      </Grid>
      <Grid item xs={12}>
        <LinkButtons />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{JSON.stringify(largeJSON)}</Typography>
      </Grid>
    </Grid>
  );
};
