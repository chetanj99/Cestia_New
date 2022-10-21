import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import People1 from "../../assets/Images/1.png"

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
    Main_container: {
        width: "100%",
        height: "100%",
    },
    Container_div: {
        width: "100%",
        height: "100%",
    },
    Title_div: {
        textAlign: "center",
        marginBottom: "60px",
        [theme.breakpoints.down("xs")]: {
            marginBottom: "50px",
        },
    },
    Title: {
        fontSize: "40px",
        textTransform: "capitalize",
        marginBottom: "0px",
        fontWeight: 500,
        marginTop: "0px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "30px",
            marginBottom: "30px",
        },
    },
    Card: {
        width: "650px",
        height: "250px",
        background: "#fff",
        textAlign: "center",
        borderRadius: "0px 50px 0px 50px !important",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: "none !important",
        marginBottom: "50px",
        padding: "50px",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            paddingRight: "10px",
            paddingLeft: "10px",
            marginRight: "10px",
        },
    },
    Card_para: {
        fontSize: "17px",
        lineHeight: "26px",
        fontWeight: 100,
        color: "#333",
        margin: "0px 0px 10px",
        marginBottom: "30px",
    },
    Card_img: {
        width: "70px",
        borderRadius: "50%",
        margin: "0px auto",
    },
    Card_name: {
        fontSize: "18px",
        marginTop: "20px",
        marginBottom: "10px",
        fontWeight: 600,
        colr: "#000",
    },
    Card_text2: {
        fontSize: "16px",
        fontWeight: 300,
        marginTop: "0px",
        marginBottom: "0px",
        color: "#000",
    },
    Slider_div: {
        paddingLeft: "17%",
        paddingRight: "17%",
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "0px",
            paddingRight: "0px",
        },
    },
}));

const Testimonials = () => {
    const classes = useStyles();
    const responsive = {
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="/Testimonials">
            <div className={classes.Root}>
                <Container className={classes.Main_container}>
                    <div className={classes.Container_div}>
                        <div className={classes.Title_div}>
                            <h2 className={classes.Title}>What People Are Saying</h2>
                        </div>
                        <div className={classes.Slider_div}>
                            <Carousel
                                responsive={responsive}
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                autoPlay={true}
                                autoPlaySpeed={4000}
                                transitionDuration={4000}
                                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                                className={classes.slide}
                                infinite={true}
                            >
                                <div data-aos="fade-up" data-aos-duration="2000">
                                    <Card className={classes.Card}>
                                        <div>
                                            <p className={classes.Card_para}>
                                                Nunc eu neque in nisl aliquet blandit. Donec sodales
                                                velit at auctor mollis. Sed vitae placerat risus. Etiam
                                                tincidunt ipsum nec ante vulputate iaculis mus sodales
                                                velit at auctor
                                            </p>
                                        </div>
                                        <div>
                                            <img
                                                src={People1}
                                                alt="img"
                                                className={classes.Card_img}
                                            />
                                            <h2 className={classes.Card_name}>Jhonathon doe</h2>
                                            <h3 className={classes.Card_text2}>Businees men</h3>
                                        </div>
                                    </Card>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="2000">
                                    <Card className={classes.Card}>
                                        <div>
                                            <p className={classes.Card_para}>
                                                Nunc eu neque in nisl aliquet blandit. Donec sodales
                                                velit at auctor mollis. Sed vitae placerat risus. Etiam
                                                tincidunt ipsum nec ante vulputate iaculis mus sodales
                                                velit at auctor
                                            </p>
                                        </div>
                                        <div>
                                            <img
                                                src={People1}
                                                alt="img"
                                                className={classes.Card_img}
                                            />
                                            <h2 className={classes.Card_name}>Jhonathon doe</h2>
                                            <h3 className={classes.Card_text2}>Businees men</h3>
                                        </div>
                                    </Card>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="2000">
                                    <Card className={classes.Card}>
                                        <div>
                                            <p className={classes.Card_para}>
                                                Nunc eu neque in nisl aliquet blandit. Donec sodales
                                                velit at auctor mollis. Sed vitae placerat risus. Etiam
                                                tincidunt ipsum nec ante vulputate iaculis mus sodales
                                                velit at auctor
                                            </p>
                                        </div>
                                        <div>
                                            <img
                                                src={People1}
                                                alt="img"
                                                className={classes.Card_img}
                                            />
                                            <h2 className={classes.Card_name}>Jhonathon doe</h2>
                                            <h3 className={classes.Card_text2}>Businees men</h3>
                                        </div>
                                    </Card>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Testimonials