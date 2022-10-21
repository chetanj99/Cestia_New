import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import { FaMap } from "react-icons/fa";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@material-ui/core/TextField";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
    Root: {
        width: "100%",
        height: "100%",
        padding: "100px 0px",
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
    Div_1: { display: "flex", alignItems: "center" },
    Icon_div: {
        width: "40px",
        height: "40px",
        background: "#623BCC",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        marginRight: "20px",
    },
    Icon_text: {
        fontSize: "18px",
        marginTop: "20px",
        textTransform: "capitalize",
        fontWeight: 400,
    },
    TextFiled: {
        width: "100%",
        marginBottom: "30px",
        "&>.MuiOutlinedInput-root": {
            borderRadius: "0px",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "15px",
        },
    },
    Btn: {
        width: "168px",
        height: "48px",
        color: "#fff",
        fontSize: "16px",
        fontWeight: 600,
        border: "1px solid #623BCC",
        borderRadius: "5px",
        background: "#623BCC",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins",
        "&:hover": {
            background: "transparent",
            color: "#000",
            border: "1px solid #623BCC",
            transition: ".3s",
        },
    },
    Main_grid: {
        paddingLeft: "15px",
        paddingRight: "15px",
        [theme.breakpoints.down("xs")]: {
            paddingTop: "15px",
            paddingLeft: "0px",
            paddingRight: "0px",
        },
    },
    Title: {
        fontSize: "30px",
        textTransform: "capitalize",
        marginBottom: "30px",
        fontWeight: 400,
        marginTop: 0,
        lineHeight: 1.1,
    },
    Para: {
        fontSize: "15px",
        fontWeight: 100,
        lineHeight: "26px",
        margin: "0px",
        marginBottom: "30px",
        [theme.breakpoints.down("xs")]: {
            marginBottom: "20px",
        },
    },
    Icons: { width: "22px", height: "25px" },
}));

const Contact = () => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div id="/Contact">
            <div className={classes.Root}>
                <Container className={classes.Main_container}>
                    <div className={classes.Container_div}>
                        <Grid container>
                            <Grid item lg={6} xs={12}>
                                <div
                                    className={classes.Main_grid}
                                    data-aos="fade-right"
                                    data-aos-duration="1500"
                                >
                                    <h2 className={classes.Title}>Contact Us</h2>
                                    <p className={classes.Para}>
                                        We design and develop services for customers of all sizes, specializing in creating stylish, modern websites.
                                    </p>
                                    <div className={classes.Div_1}>
                                        <div className={classes.Icon_div}>
                                            <FaMap className={classes.Icons} />
                                        </div>
                                        <h3 className={classes.Icon_text}>
                                            Jurain,Dhaka Bangladesh
                                        </h3>
                                    </div>
                                    <div className={classes.Div_1}>
                                        <div className={classes.Icon_div}>
                                            <CallIcon className={classes.Icons} />
                                        </div>
                                        <h3 className={classes.Icon_text}>+1234321321</h3>
                                    </div>
                                    <div className={classes.Div_1}>
                                        <div className={classes.Icon_div}>
                                            <EmailIcon className={classes.Icons} />
                                        </div>
                                        <h3 className={classes.Icon_text}>Websitename@Mail.Com</h3>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <div
                                    className={classes.Main_grid}
                                    data-aos="fade-right"
                                    data-aos-duration="1500"
                                >
                                    <TextField
                                        hiddenLabel
                                        placeholder="Name"
                                        variant="outlined"
                                        className={classes.TextFiled}
                                    />
                                    <TextField
                                        hiddenLabel
                                        placeholder="Email"
                                        variant="outlined"
                                        className={classes.TextFiled}
                                    />
                                    <TextField
                                        hiddenLabel
                                        multiline
                                        rows={6}
                                        placeholder="Your Message"
                                        variant="outlined"
                                        className={classes.TextFiled}
                                    />
                                    <button className={classes.Btn}>Send Message</button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Contact;
