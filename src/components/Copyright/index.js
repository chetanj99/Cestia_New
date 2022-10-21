import React from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    Root: {
        width: "100%",
        height: "100%",
        background: "#000",
        padding: "30px 0px",
        [theme.breakpoints.down("xs")]: {
            padding: "25x 0px",
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
    Title_text: {
        fontSize: "16px",
        fontWeight: 300,
        color: "#fff",
        textTransform: "capitalize",
        marginTop: "10px",
        marginBottom: "10px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
        },
    },
    Main_div: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
}));

const Copyright = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.Root}>
                <Container className={classes.Main_container}>
                    <div className={classes.Container_div}>
                        <div className={classes.Main_div}>
                            <h6 className={classes.Title_text}>
                                ©Copyright | Cestia All Right Reserved
                            </h6>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Copyright;
