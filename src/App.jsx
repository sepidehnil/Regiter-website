import { Provider } from "react-redux";
import Routes from "./routes/Routes";
import { makeStyles } from "@material-ui/core/styles";
import store from "./redux/store";
import theme from "./assets/styles/globalstyle";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
