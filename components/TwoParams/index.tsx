import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { LinkButtons } from "../LinkButtons";

export const TwoParams = () => {
  const Router = useRouter();

  const query = Router.query as { [k: string]: string };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">TwoParams Page</Typography>
        {Object.keys(query).map((key, index) => {
          return (
            <Typography key={index} variant="h5">
              {`${key} = ${query[key]}`}
            </Typography>
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <LinkButtons />
      </Grid>
    </Grid>
  );
};
