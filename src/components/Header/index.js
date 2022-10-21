import React, { useState } from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const useStyles = makeStyles(() => ({
  Root: {
    width: "100%",
    height: "66px",
    position: "fixed",
    zIndex: "11",
    background: "white",
    boxShadow: "0 2px 10px -1px rgb(87 97 100 / 35%)",
    top: 0,
    left: 0,
  },
  Root2: {
    width: "100%",
    height: "66px",
    position: "fixed",
    zIndex: "11",
    background: "transparent",
    top: 0,
    left: 0,
    color: "#fff",
  },
  Main_container: {
    width: "100%",
    height: "66px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Logo_div: {
    fontSize: "24px",
    fontWeight: 700,
    textTransform: "capitalize",
    cursor: "pointer",
    marginTop: "10px",
  },
  Component_div: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
  },
  Components: {
    fontSize: "15px",
    fontWeight: 400,
    textTransform: "capitalize",
    cursor: "pointer",
    color: "#333333",
    marginTop: "10px",
    "&:hover": {
      color: "#623BCC",
    },
  },
  Components2: {
    fontSize: "15px",
    fontWeight: 400,
    textTransform: "capitalize",
    cursor: "pointer",
    color: "#fff",
    marginTop: "10px",
    textDecoration: "none",
  },
  Mob_components: {
    width: "100%",
    height: "45px",
    fontSize: "15px",
    paddingLeft: "10px",
    display: "flex",
    alignItems: "center",
    color: "#fff",
  },
  Menu1: {
    width: "100%",
    height: "270px",
    background: "black",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
  },
  Menu2: {
    width: "100%",
    height: "270px",
    background: "black",
    display: "flex",
    flexDirection: "column",
  },
  Menu_icon: {
    width: "30px",
    height: "30px",
  },
  Links: {
    textDecoration: "none",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [show, setShow] = useState(false);
  const [scroll_active, setScroll_Active] = React.useState();

  const changebg = () => {
    if (window.scrollY >= 100) {
      setScroll_Active(true);
    } else {
      setScroll_Active(false);
    }
  };

  window.addEventListener("scroll", changebg);

  return (
    <div>
      {Mobile ? (
        <>
          {scroll_active ? (
            <div className={classes.Root}>
              <Container>
                <div className={classes.Main_container}>
                  <div>
                    <span className={classes.Logo_div}>Cestia.</span>
                  </div>
                  <div>
                    <MenuIcon
                      className={classes.Menu_icon}
                      onClick={() => {
                        setShow(!show);
                      }}
                    />
                  </div>
                </div>
                {show ? (
                  <>
                    <div className={classes.Menu1}>
                      <Link
                        to="/Home"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>Home</div>
                      </Link>
                      <Link
                        to="/About"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>About</div>
                      </Link>
                      <Link
                        to="/Services"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>Services</div>
                      </Link>
                      <Link
                        to="/Portfolio"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>Portfolio</div>
                      </Link>
                      <Link
                        to="/Testimonials"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>
                          Testimonials
                        </div>
                      </Link>
                      <Link
                        to="/Contact"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>Contact Us</div>
                      </Link>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </Container>
            </div>
          ) : (
            <div className={classes.Root2}>
              <Container>
                <div className={classes.Main_container}>
                  <div>
                    <span className={classes.Logo_div}>Cestia.</span>
                  </div>
                  <div>
                    <MenuIcon
                      className={classes.Menu_icon}
                      onClick={() => {
                        setShow(!show);
                      }}
                    />
                  </div>
                </div>
                {show ? (
                  <>
                    <div className={classes.Menu2}>
                      <Link
                        to="/Home"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>Home</div>
                      </Link>
                      <Link
                        to="/About"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>About</div>
                      </Link>
                      <Link
                        to="/Services"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>Services</div>
                      </Link>
                      <Link
                        to="/Portfolio"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>Portfolio</div>
                      </Link>
                      <Link
                        to="/Testimonials"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>
                          Testimonials
                        </div>
                      </Link>
                      <Link
                        to="/Contact"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={classes.Links}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <div className={classes.Mob_components}>Contact Us</div>
                      </Link>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </Container>
            </div>
          )}
        </>
      ) : (
        <>
          {scroll_active ? (
            <div className={classes.Root}>
              <Container>
                <div className={classes.Main_container}>
                  <div>
                    <span className={classes.Logo_div}>Cestia.</span>
                  </div>
                  <div className={classes.Component_div}>
                    <Link
                      to="/Home"
                      spy={true}
                      smooth={true}
                      duration={800}
                      className={classes.Links}
                    >
                      <div className={classes.Components}>
                        <span>Home</span>
                      </div>
                    </Link>
                    <Link
                      to="/About"
                      spy={true}
                      smooth={true}
                      duration={800}
                      className={classes.Links}
                    >
                      <div className={classes.Components}>
                        <span>About</span>
                      </div>
                    </Link>
                    <Link
                      to="/Services"
                      spy={true}
                      smooth={true}
                      duration={800}
                      className={classes.Links}
                    >
                      <div className={classes.Components}>
                        <span>Services</span>
                      </div>
                    </Link>
                    <Link
                      to="/Portfolio"
                      spy={true}
                      smooth={true}
                      duration={800}
                      className={classes.Links}
                    >
                      <div className={classes.Components}>
                        <span>Portfolio</span>
                      </div>
                    </Link>
                    <Link
                      to="/Testimonials"
                      spy={true}
                      smooth={true}
                      duration={800}
                      className={classes.Links}
                    >
                      <div className={classes.Components}>
                        <span>Testimonials</span>
                      </div>
                    </Link>
                    <Link
                      to="/Contact"
                      spy={true}
                      smooth={true}
                      duration={800}
                      className={classes.Links}
                    >
                      <div className={classes.Components}>
                        <span>Contact Us</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          ) : (
            <div className={classes.Root2}>
              <Container>
                <div className={classes.Main_container}>
                  <div>
                    <span className={classes.Logo_div}>Cestia.</span>
                  </div>
                  <div className={classes.Component_div}>
                    <Link
                      to="/Home"
                      spy={true}
                      smooth={true}
                      duration={800}
                      className={classes.Links}
                    >
                      <div className={classes.Components2}>
                        <span>Home</span>
                      </div>
                    </Link>
                    <Link
                      to="/About"
                      spy={true}
                      smooth={true}
                      duration={800}
                      className={classes.Links}
                    >
                      <div className={classes.Components2}>
                        <span>About</span>
                      </div>
                    </Link>
                    <Link
                      to="/Services"
                      spy={true}
                      smooth={true}
                      duration={800}
                      className={classes.Links}
                    >
                      <div className={classes.Components2}>
                        <span>Services</span>
                      </div>
                    </Link>
                    <Link
                      to="/Portfolio"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      className={classes.Links}
                    >
                      <div className={classes.Components2}>
                        <span>Portfolio</span>
                      </div>
                    </Link>
                    <Link
                      to="/Testimonials"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      className={classes.Links}
                    >
                      <div className={classes.Components2}>
                        <span>Testimonials</span>
                      </div>
                    </Link>
                    <Link
                      to="/Contact"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      className={classes.Links}
                    >
                      <div className={classes.Components2}>
                        <span>Contact Us</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
