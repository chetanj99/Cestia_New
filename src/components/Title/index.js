import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Root: {
    textAlign: "center",
    marginBottom: "60px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "30px",
    },
  },
  Title: {
    fontSize: "40px",
    fontWeight: 500,
    textTransform: "capitalize",
    marginBottom: "0px",
    marginTop: "0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
}));

const Title = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.Root}>
      <h2 className={classes.Title}>{title}</h2>
    </div>
  );
};

export default Title;
