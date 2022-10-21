import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Title from "../Title";
import Port_3 from "../../assets/Images/Port_3.jpg";
import Ser_1 from "../../assets/Images/Ser_1.jpeg";
import Ser_2 from "../../assets/Images/Ser_2.jpg";
import Ser_3 from "../../assets/Images/Ser_3.jpg";
import Ser_4 from "../../assets/Images/Ser_4.jpg";
import Ser_5 from "../../assets/Images/Ser_5.jpg";
import "./Portfolio.css";

const useStyles = makeStyles((theme) => ({
  Root: {
    width: "100%",
    height: "100%",
    padding: "100px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "50px 0px",
    },
  },
  Main_div: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
  }, []);

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndexOpen] = useState([0]);

  const images = [
    "/static/media/Ser_1.6aa1b2cf562bd4810e86.jpg",
    "/static/media/Ser_2.77b8f8c92996a151a2b6.jpg",
    "/static/media/Ser_3.47fcb0bcb1de52c83d4a.jpg",
    "/static/media/Port_3.9a981dd3833f53fb6ec6.jpg",
    "/static/media/Ser_5.5ff61ba1e99a6a3268f2.jpg",
    "/static/media/Ser_4.28d28c44e54f75edf3ee.jpg",
  ];
  return (
    <div id="/Portfolio">
      <div className={classes.Root}>
        <Title title="Our Portfolio" />
        <div className={classes.Main_div}>
          <div
            className="ui_card"
            data-aos="zoom-in"
            data-aos-duration="1500"
            onClick={() => {
              setOpen(true);
            }}
          >
            <img src={Ser_1} alt="img" />
            <div className="description">
              <h2>Branding Identity</h2>
            </div>
          </div>
          <div
            className="ui_card"
            data-aos="zoom-in"
            data-aos-duration="1500"
            onClick={() => {
              setOpen(true);
            }}
          >
            <img src={Ser_2} alt="img" />
            <div className="description">
              <h2>Web Design</h2>
            </div>
          </div>
          <div
            className="ui_card"
            data-aos="zoom-in"
            data-aos-duration="1500"
            onClick={() => {
              setOpen(true);
            }}
          >
            <img src={Ser_3} alt="img" />
            <div className="description">
              <h2>Logo Design</h2>
            </div>
          </div>
        </div>
        <div className={classes.Main_div}>
          <div
            className="ui_card"
            data-aos="zoom-in"
            data-aos-duration="1500"
            onClick={() => {
              setOpen(true);
            }}
          >
            <img src={Port_3} alt="img" />
            <div className="description">
              <h2>Business Card</h2>
            </div>
          </div>
          <div
            className="ui_card"
            data-aos="zoom-in"
            data-aos-duration="1500"
            onClick={() => {
              setOpen(true);
            }}
          >
            <img src={Ser_5} alt="img" />
            <div className="description">
              <h2>Flayer Design</h2>
            </div>
          </div>
          <div
            className="ui_card"
            data-aos="zoom-in"
            data-aos-duration="1500"
            onClick={() => {
              setOpen(true);
            }}
          >
            <img src={Ser_4} alt="img" />
            <div className="description">
              <h2>Website Mockup</h2>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            setOpen(false);
          }}
          onMovePrevRequest={() => {
            setPhotoIndexOpen((photoIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setPhotoIndexOpen((photoIndex + 1) % images.length);
          }}
        />
      )}
    </div>
  );
};

export default Portfolio;
