import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#E1E4E5',
    color: '#607D8B',
    fontFamily: 'Roboto Medium',
    fontSize: '12px',
    letterSpacing: '2px',
    lineHeight: '16px',
    textAlign: 'center',
    borderTop: '2px solid #C1C6C8',
    flexShrink: '0'
  },
}));

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