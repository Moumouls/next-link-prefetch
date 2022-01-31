import { Button, Grid } from "@mui/material";
import Link from "next/link";
import * as Icons from "@mui/icons-material";

export const LinkButtons = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Link href={{ pathname: "/" }} passHref shallow>
          <Button variant="contained" startIcon={<Icons.Home />}>
            Go to home
          </Button>
        </Link>
      </Grid>
      <Grid item>
        <Link href={{ pathname: "/noParams" }} passHref shallow>
          <Button variant="contained">Go to no params page</Button>
        </Link>
      </Grid>
      <Grid item>
        <Link
          href={{ pathname: "/[paramsOne]", query: { paramsOne: "params-1" } }}
          passHref
          shallow
        >
          <Button variant="contained">Go to one params page</Button>
        </Link>
      </Grid>
      <Grid item>
        <Link
          href={{
            pathname: "/[paramsOne]/[paramsTwo]",
            query: { paramsOne: "params-1", paramsTwo: "params-2" },
          }}
          shallow
          passHref
        >
          <Button variant="contained">Go to two params page</Button>
        </Link>
      </Grid>
      <Grid item>
        <Link
          href={{
            pathname: "/[paramsOne]/[paramsTwo]/[paramsThree]",
            query: {
              paramsOne: "params-1",
              paramsTwo: "params-2",
              paramsThree: "params-3",
            },
          }}
          passHref
          shallow
        >
          <Button variant="contained">Go to three params page</Button>
        </Link>
      </Grid>
    </Grid>
  );
};
