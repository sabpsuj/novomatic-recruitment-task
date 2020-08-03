import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Logo } from "./../../../logo.svg";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#617D8B',
    boxShadow: 'none'
  },
  title: {
    fontSize: '24px',
    letterSpacing: '0'
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    marginLeft: '10px'
  }
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.header} position="static">
          <Container maxWidth="md">
            <Toolbar>
              <Link to="/">
                <SvgIcon>
                  <Logo />
                </SvgIcon>
              </Link>
              <Link className={classes.link} to="/">
                <Typography className={classes.title} variant="h6" >
                  Users app
                </Typography>
              </Link>
            </Toolbar>
          </Container>
    </AppBar>
  );
}
