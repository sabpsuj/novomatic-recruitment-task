import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import userProfileTheme from './UserProfile';

const useStyles = makeStyles((theme) => (userProfileTheme));

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
