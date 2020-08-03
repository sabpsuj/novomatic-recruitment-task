import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  userPaper: {
    maxWidth: '432px',
    margin: '48px auto 0',
    display: 'flex',
    alignItems: 'baseline',
    padding: '31px 21px',
  },
  paperHeader: {
    padding: '0',
    alignSelf: 'start'
  },
  button: {
    padding: '0',
    '&:hover' : {
      backgroundColor: 'transparent'
    }
  },
  title: {
    fontSize: '24px',
    lineHeight: '1'
  },
  input: {
    width: '100%',
    height: '56px',
    color: '#000 !important',
    margin: '16px 0'
  },
  paperFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px 0 0 75px'
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
}));

const UserProfile = () => {
  const users = useSelector(state => state.users.data);
  const location = window.location.href.toString();
  const userId = [...location][location.length-1];
  const user = users[userId-1];

  const classes = useStyles();
  
  return (
    <Paper className={classes.userPaper}>
      <Link className={classes.link} to="/">
        <IconButton variant="contained" className={classes.button}>
          <ArrowBackIosIcon/>
        </IconButton>
      </Link>
      <Box p={2} className={classes.paperHeader}>
        <Typography className={classes.title} variant='h3'>{`${user.first_name} ${user.last_name}`}</Typography>
        <Typography>ID: {`${userId}`}</Typography>
        <TextField
          disabled
          className={classes.input}
          label="Name"
          defaultValue={`${user.first_name}`}
          variant="outlined"
        />
        <TextField
          disabled
          className={classes.input}
          label="Surname"
          defaultValue={`${user.last_name}`}
          variant="outlined"
        />
        <TextField
          disabled
          className={classes.input}
          label="Email"
          defaultValue={`${user.email}`}
          variant="outlined"
        />
        <Box p={2} className={classes.paperFooter}>
          <Button disabled>Cancel</Button>
          <Button variant="contained" disabled>Submit to review</Button>
        </Box>
      </Box>
    </Paper>
  )
};

export default UserProfile;
