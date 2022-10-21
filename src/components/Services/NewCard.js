import React from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Card: {
    width: "310px",
    height: "230px",
    background: "#fff",
    textAlign: "center",
    padding: "30px",
    borderRadius: "0px 50px 0px 50px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "30px",
    boxShadow: "none !important",
    "&:hover": {
      boxShadow: "0px 0px 70px rgb(29 24 24 / 9%) !important",
    },
    [theme.breakpoints.down("xs")]: {
      width: "280px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  Card_div: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  Card_icon: {
    width: "70px",
    height: "70px",
    background: "#623BCC",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  Card_title: {
    fontSize: "22px",
    fontWeight: 500,
    color: "#000",
    textTransform: "capitalize",
    transition: ".3s",
    marginTop: "15px",
    marginBottom: "20px",
  },
  Card_para: {
    fontSize: "15px",
    fontWeight: 100,
    color: "#333",
    lineHeight: "26px",
    margin: "0px",
  },
  Icons: {
    width: "30px",
    height: "25px",
  },
}));

const NewCard = ({ icon, title, para }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.Card}>
        <div className={classes.Card_div}>
          <div className={classes.Card_icon}>{icon}</div>
          <h4 className={classes.Card_title}>{title}</h4>
          <p className={classes.Card_para}>{para}</p>
        </div>
      </Card>
    </div>
  );
};

export default NewCard;
