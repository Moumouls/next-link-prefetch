import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#3D5AFE",
        light: "#DCE9FD",
        dark: "#212B55",
      },
      secondary: {
        main: "#7C4DFF",
        light: "#EEE7FE",
        dark: "#4B3CAF",
      },
      success: {
        main: "#008000",
        light: "#C3FECF",
      },
      error: {
        main: "#EE0701",
        light: "#FFB5B3",
      },
      warning: {
        main: "#F2BB2E",
        light: "#FBE8B7",
      },
      info: {
        main: "#2196F3",
        light: "#64B5F6",
        dark: "#1976D2",
      },
      text: {
        primary: "#232735",
        secondary: "#505565",
        disabled: "#8B8A93",
      },
      background: {
        default: "#F0F0F5",
        paper: "#FFF",
      },
      divider: "rgba(0,0,0,0.12)",
    },
    spacing: 10,
    shape: {
      borderRadius: 4,
    },
    typography: {
      h1: {
        fontSize: 96,
        letterSpacing: -0.1,
        fontWeight: 400,
      },
      h2: {
        fontSize: 60,
        letterSpacing: -0.5,
        fontWeight: 400,
      },
      h3: {
        fontSize: 48,
        letterSpacing: 0,
        fontWeight: 400,
      },
      h4: {
        fontSize: 34,
        letterSpacing: 0.25,
        fontWeight: 400,
      },
      h5: {
        fontSize: 24,
        letterSpacing: 0,
        fontWeight: 400,
      },
      h6: {
        fontSize: 20,
        letterSpacing: 0.15,
        fontWeight: 500,
      },
      body1: {
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: 400,
      },
      body2: {
        fontSize: 14,
        letterSpacing: 0.25,
        fontWeight: 400,
      },
      subtitle1: {
        fontSize: 16,
        letterSpacing: 0.15,
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: 14,
        letterSpacing: 0.1,
        fontWeight: 500,
      },
      button: {
        fontSize: 14,
        letterSpacing: 1.25,
        fontWeight: 500,
        textTransform: "uppercase",
      },
      caption: {
        fontSize: 12,
        letterSpacing: 0.4,
        fontStyle: "normal",
        fontWeight: 400,
      },
      overline: {
        fontSize: 10,
        letterSpacing: 1.5,
        lineHeight: 1,
        fontWeight: 400,
        textTransform: "uppercase",
      },
    },
  })
);
