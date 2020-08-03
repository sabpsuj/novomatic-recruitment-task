import React, { useState } from 'react';
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
    color: '#000',
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

const NewUserProfile = (
  userAdded
) => {
  const users = useSelector(state => state.users.data);

  const classes = useStyles();

  const [form, setState] = useState({
    name: '',
    surname: '',
    email: ''
  });

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = () => {
    setState({
      ...form,
      name: '',
      surname: '',
      email: ''
    });
  };

  const printValues = e => {
    e.preventDefault();
    let newUser = {
      id: users.length+1,
      first_name: form.name,
      last_name: form.surname,
      email: form.email
    };
    users.push(newUser);
    clearForm();
    window.history.back();
  };
  
  return (
    <Paper className={classes.userPaper}>
      <Link to="/">
        <IconButton variant="contained" className={classes.button}>
          <ArrowBackIosIcon/>
        </IconButton>
      </Link>
      <Box p={2} className={classes.paperHeader}>
        <Typography className={classes.title} variant='h3'>New user details</Typography>
        <TextField
          className={classes.input}
          label="Name"
          value={form.name}
          variant="outlined"
          onChange={updateField}
          name="name"
        />
        <TextField
          className={classes.input}
          label="Surname"
          value={form.surname}
          variant="outlined"
          onChange={updateField}
          name="surname"
        />
        <TextField
          className={classes.input}
          id="outlined-disabled"
          label="Email"
          value={form.email}
          variant="outlined"
          onChange={updateField}
          name="email"
        />
        <Box p={2} className={classes.paperFooter}>
          <Link className={classes.link} to="/">
            <Button>Cancel</Button>
          </Link>
          <Button variant="contained" onClick={printValues}>Submit to review</Button>
        </Box>
      </Box>
    </Paper>
  )
};

export default NewUserProfile;
