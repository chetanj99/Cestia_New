import React, { useState } from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import Header from "../Header";
import Wave from "../../assets/Images/Wave.png";
import Photo from "../../assets/Images/Photo.jpeg";
import "./Hero.css";

const useStyles = makeStyles((theme) => ({
  Root: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    backgroundImage: `url(${Photo})`,
    backgroundSize: "cover"
  },
  Main_div: {
    width: "100%",
    height: "100vh",
    background: "rgba(98, 59, 204, .7)",
    position: "relative",
    color: "white",
  },
  Bottom_img: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  Container: {
    width: "100%",
    height: "100%",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
  Title_div: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  h2: {
    fontSize: "80px",
    fontWeight: 900,
    textTransform: "capitalize",
    margin: "0px",
    marginTop: "60px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      marginBottom: "20px",
    },
  },
  Para: {
    fontSize: "20px",
    fontWeight: 300,
    color: "#fff",
    textAlign: "center",
    margin: "0px",
    marginBottom: "40px",
    padding: "0px 300px",
    lineHeight: "28px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },
  Btn: {
    display: "inline-block",
    padding: "12px 25px",
    textTransform: "capitalize",
    fontSize: "15px",
    fontWeight: 500,
    letterSpacing: "1px",
    border: "1px solid #fff",
    background: "#fff",
    boxShadow: "0px 0px 70px rgb(29 24 24 / 9%)",
    borderRadius: "5px",
    textAlign: "center",
    cursor: "pointer",
    color: "#000",
    "&:hover": {
      background: "transparent",
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  const [text1, setText1] = useState(true);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);

  const Animat = () => {
    setText1(false);
    setText2(true);
  };
  const Animat2 = () => {
    setText2(false);
    setText3(true);
  };
  const Animat3 = () => {
    setText3(false);
    setText1(true);
  };

  if (text1 === true) {
    setTimeout(() => Animat(), 3000);
  }
  if (text2 === true) {
    setTimeout(() => Animat2(), 3000);
  }
  if (text3 === true) {
    setTimeout(() => Animat3(), 3000);
  }

  return (
    <div id="/Home">
      <Header />
      <div className={classes.Root}></div>
      <div className={classes.Main_div}>
        <img src={Wave} alt="wave" className={classes.Bottom_img} />
        <Container className={classes.Container}>
          <div className={classes.Title_div}>
            {text1 ? (
              <>
                <span className="text-first">Creative Agency</span>
              </>
            ) : (
              ""
            )}
            {text2 ? (
              <>
                <span className="text-second">We make Happens</span>
              </>
            ) : (
              ""
            )}
            {text3 ? (
              <>
                <span className="text-third">Proffesional People</span>
              </>
            ) : (
              ""
            )}
            <p className={classes.Para}>
              We are a creative web design agency who makes beautiful websites
              for thousands of peoples.
            </p>
            <Link
              to="/About"
              spy={true}
              smooth={true}
              duration={800}
              style={{ textDecoration: "none" }}
            >
              <div className={classes.Btn}>Get Started</div>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
