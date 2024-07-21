import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "iransansnum",
            src: "url('../fonts/IRANSansWeb(FaNum).ttf') format('truetype')",
          },
        ],
        body: {
          background:
            " linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(72,45,253,1) 100%)",
          fontFamily: "iransansnum",
          boxSizing: "border-box",
          margin: "0",
          padding: "0",
          direction: "rtl",
        },
        "*": {
          fontFamily: "iransansnum !important",
          textAlign: "right !important",
        },
      },
    },
    MuiInputLabel: {
      root: {
        display: "flex",
        justifyContent: "flex-start",
        direction: "rtl",
        right: "30px",
        transformOrigin: "top right !important",
      },
    },
    MuiOutlinedInput: {
      root: {},
    },
    MuiFormHelperText: {
      root: {
        fontSize: "0.73rem",
      },
    },
  },
});

export default theme;
