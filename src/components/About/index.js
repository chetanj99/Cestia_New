import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../Title";
import About_img from "../../assets/Images/About_img.jpg";

const useStyles = makeStyles((theme) => ({
  Root: {
    width: "100%",
    height: "100%",
    padding: "100px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "50px 0px",
    },
  },
  Container: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
  Img_sec: {
    paddingRight: "15px",
    paddingLeft: "15px",
  },
  Img: { width: "100%", borderRadius: "0px 100px 0px 100px" },
  Text_section: {
    marginTop: "70px",
    paddingLeft: "15px",
    paddingRight: "15px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
    },
  },
  h2: {
    fontSize: "30px",
    fontWeight: 400,
    textTransform: "capitalize",
    marginTop: "0px",
    marginBottom: "18px",
    color: "#333333",
  },
  Para: {
    fontSize: "16px",
    fontWeight: 100,
    lineHeight: "25px",
    margin: "0px 0px 20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
}));

const About = () => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="/About">
      <div className={classes.Root}>
        <Container className={classes.Container}>
          <Title title="Story About Agency" />
          <Grid container>
            <Grid
              item
              lg={6}
              xs={12}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className={classes.Img_sec}>
                <img src={About_img} alt="img" className={classes.Img} />
              </div>
            </Grid>
            <Grid item lg={6} xs={12}>
              <div className={classes.Text_section}>
                <h2 className={classes.h2}>A Creative Webdesign Agency</h2>
                <p className={classes.Para}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default About;
