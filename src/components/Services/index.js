import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBook } from "react-icons/fa";
import { FaAdjust } from "react-icons/fa";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { FaClone } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaGoogleWallet } from "react-icons/fa";
import Title from "../Title";
import NewCard from "./NewCard.js";

const useStyles = makeStyles((theme) => ({
  Root: {
    width: "100%",
    height: "100%",
    padding: "100px 0px",
    background: "#F9F9F9",
    [theme.breakpoints.down("xs")]: {
      padding: "50px 0px",
    },
  },
  Container: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
  Grid_div: {
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  Icons: {
    width: "35px",
    height: "30px",
  },
}));

const Services = () => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="/Services">
      <div className={classes.Root}>
        <Container className={classes.Container}>
          <Title title="Our Services" />
          <Grid container>
            <Grid
              item
              lg={4}
              xs={12}
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <NewCard
                icon={<FaBook className={classes.Icons} />}
                title="Interface Design"
                para="We design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
              />
            </Grid>
            <Grid
              item
              lg={4}
              xs={12}
              data-aos="zoom-in"
              data-aos-duration="1000"
              className={classes.Grid_div}
            >
              <NewCard
                icon={<FaAdjust className={classes.Icons} />}
                title="Landing Page Design"
                para="We design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
              />
            </Grid>
            <Grid
              item
              lg={4}
              xs={12}
              data-aos="zoom-in"
              data-aos-duration="1000"
              className={classes.Grid_div}
            >
              <NewCard
                icon={<FaAmericanSignLanguageInterpreting className={classes.Icons} />}
                title="App Design"
                para="We design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              lg={4}
              xs={12}
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <NewCard
                icon={<FaClone className={classes.Icons} />}
                title="Application Development"
                para="We design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
              />
            </Grid>
            <Grid
              item
              lg={4}
              xs={12}
              data-aos="zoom-in"
              data-aos-duration="1000"
              className={classes.Grid_div}
            >
              <NewCard
                icon={<FaGitlab className={classes.Icons} />}
                title="Responsive Webdesign"
                para="We design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
              />
            </Grid>
            <Grid
              item
              lg={4}
              xs={12}
              data-aos="zoom-in"
              data-aos-duration="1000"
              className={classes.Grid_div}
            >
              <NewCard
                icon={<FaGoogleWallet className={classes.Icons} />}
                title="Website Traffic"
                para="We design and develop services for customers of all sizes, specializing in creating stylish, modern websites."F
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Services;
