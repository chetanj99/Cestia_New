import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  Root: {
    width: "100%",
    height: "100%",
    padding: "100px 0px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px",
      paddingBottom: "20px"
    },
  },
  Main_container: {
    width: "100%",
    height: "100%",
  },
  Container_div: {
    width: "100%",
    height: "100%"
  },
  Title: {
    fontSize: "22px",
    fontWeight: 500,
    marginTop: "0px",
    marginBottom: "20px",
    textTransform: "capitalize",
    transition: ".3s",
    color: "#000",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px",
    },
  },
  Para: {
    fontSize: "15px",
    fontWeight: 100,
    lineHeight: "26px",
    margin: "0px",
    paddingRight: "150px",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0px",
    },
  },
  Container_grid: {
    [theme.breakpoints.down("xs")]: {
      gap: "1rem"
    },
  },
  Links: {
    fontSize: "15px",
    fontWeight: 100,
    color: "#000",
    marginBottom: "4px",
    cursor: "pointer",
    background: "transparent",
    border: "none"
  },
  Icons: {
    width: "25px",
    height: "20px",
    marginRight: "10px",
    color: "#623BCC",
    cursor: "pointer",
  },
  Links_div: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Footer = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className={classes.Root}>
        <Container className={classes.Main_container}>
          <div className={classes.Container_div}>
            <Grid container className={classes.Container_grid}>
              <Grid item lg={6} xs={12}>
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <h2 className={classes.Title}>About Us</h2>
                  <p className={classes.Para}>
                    We are a creative web design agency who makes beautiful
                    websites for thousands of peoples.
                  </p>
                </div>
              </Grid>
              <Grid item lg={3} xs={12}>
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <h2 className={classes.Title}>Footer Menu</h2>
                  <div className={classes.Links_div}>
                    <Link to="/Home" spy={true} smooth={true} duration={800}>
                      <button className={classes.Links}>Home</button>
                    </Link>
                    <Link to="/About" spy={true} smooth={true} duration={800}>
                      <button className={classes.Links}>About Us</button>
                    </Link>
                    <Link
                      to="/Services"
                      spy={true}
                      smooth={true}
                      duration={800}
                    >
                      <button className={classes.Links}>Services</button>
                    </Link>
                    <Link
                      to="/Portfolio"
                      spy={true}
                      smooth={true}
                      duration={800}
                    >
                      <button className={classes.Links}>Portfolio</button>
                    </Link>
                    <Link to="/Contact" spy={true} smooth={true} duration={800}>
                      <button className={classes.Links}>Contact us</button>
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} xs={12}>
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <h2 className={classes.Title}>Footer Menu</h2>
                  <div>
                    <FaFacebookF className={classes.Icons} />
                    <FaTwitter className={classes.Icons} />
                    <FiDribbble className={classes.Icons} />
                    <FaLinkedinIn className={classes.Icons} />
                    <FaYoutube className={classes.Icons} />
                    <FaInstagram className={classes.Icons} />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

