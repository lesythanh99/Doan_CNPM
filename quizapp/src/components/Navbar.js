import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Button
} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from 'react-router-dom';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
    '&:hover': {
      color: `white`,
      textDecoration: `none`,
    },
  },
  user: {
    display: 'none'
  },
  login: {
    display: 'none'
  },
  login1: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
    '&:hover': {
      color: `white`,
      textDecoration: `none`,
    },
    paddingTop: `20px`
  }
});


function Header(item) {
  let history = useHistory();
  const { idofuser } = useParams();
  const navLinks = [
    { title: `Trang chủ`, path: `/home/` + typeof (idofuser) == "undefined" ? "" : idofuser },
    { title: `Bài thi`, path: `/choose-test` + "/" + typeof (idofuser) == "undefined" ? "" : idofuser },
    { title: `Tạo bài thi`, path: `/createTest` + `/` + typeof (idofuser) == "undefined" ? "" : idofuser },
    { title: `blog`, path: `/blog` },
    { title: `contact`, path: `/contact` },
    { title: `faq`, path: `/faq` }
  ];
  const classes = useStyles();
  const linkToUser = () => {
    history.push("/infor-user/" + idofuser);
  }
  React.useEffect(() => {
  }, []);

  const iconUser = (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      onClick={() => linkToUser()}
    >
      <AccountCircle />
    </IconButton>
  );
  const iconLogin = (

    <Link to={`/login`}><Button className={classes.login1} color="inherit">Login</Button></Link>
  );


  const handleClick = (title, path) => {

    if (typeof (idofuser) != "undefined") {
      return path;
    }
    history.push("/login");

  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <CheckBoxIcon fontSize="large"
              padding="10px"
            />
            <a className={classes.linkText} href={typeof (idofuser) == "undefined" ? "/home" : "/home/" + idofuser}>QuizDau</a>

          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >

            <a href={typeof (idofuser) == "undefined" ? "/home" : "/home/" + idofuser} className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="Trang chủ" />
              </ListItem>
            </a>
            <a href={typeof (idofuser) == "undefined" ? "/login" : "/choose-test/" + idofuser} className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="Bài thi" />
              </ListItem>
            </a>
            <a href={typeof (idofuser) == "undefined" ? "/login" : "/createTest/" + idofuser} className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="Tạo bài thi" />
              </ListItem>
            </a>
            <a href="/blog" className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="blog" />
              </ListItem>
            </a>
            <a href="/contact" className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="contact" />
              </ListItem>
            </a>
            <a href="/faq" className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="faq" />
              </ListItem>
            </a>

          </List>

          {typeof (idofuser) != "undefined" ? iconUser : iconLogin}


        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
