import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import footerTheme from './Footer';

const useStyles = makeStyles((theme) => (footerTheme));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Typography variant="overline">
          {'© Users app'}
        </Typography>
        </Container>
      </footer>
  );
}