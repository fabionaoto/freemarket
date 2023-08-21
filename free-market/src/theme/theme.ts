import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let Theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none",
          border: "1px solid #e0e0e0",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0",
          paddingBottom: 0,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Roboto"].join(","),
    h1: {
      fontSize: "1.3 rem",
    },
    h2: {
      fontSize: "1.0 rem",
    },
  },
  palette: {},
});

Theme = responsiveFontSizes(Theme);

export { Theme };
