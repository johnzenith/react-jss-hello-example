import React from "react";
import { render } from "react-dom";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    padding: 40,
    background: ({ theme }) => theme.background,
    textAlign: "left"
  },
  title: {
    font: {
      size: 40,
      weight: 900
    },
    color: ({ theme }) => theme.color
  },
  link: {
    color: ({ theme }) => theme.color,
    "&:hover": {
      opacity: 0.5
    }
  }
});

const Comp = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Hello React-JSS!</h1>
      <a
        className={classes.link}
        href="http://cssinjs.org/react-jss"
        traget="_blank"
      >
        See docs
      </a>
    </div>
  );
};

const theme = {
  background: "#f7df1e",
  color: "#24292e"
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Comp />
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
