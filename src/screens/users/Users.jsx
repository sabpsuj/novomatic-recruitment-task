import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import UsersList from './UsersList';
import { loadUsers } from '../../redux/actions/usersActions';

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: '0'
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#617D8B',
    color: '#fff'
  },
  lalala: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 24px 0'
  },
  title: {
    fontSize: '1.5rem'
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
}));


const Users = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
      <Container maxWidth="md">
        <Box mt={4} clone>
          <Paper className={classes.paper}>
            <Box p={2} className={classes.lalala}>
              <Typography className={classes.title} variant='h3'>Users</Typography>
              <Link className={classes.link} to="/add-user">
                <Button variant="contained" className={classes.button} startIcon={<AddIcon/>}>
                  Add user
                </Button>
              </Link>
            </Box>
            <UsersList />
          </Paper>
        </Box>
      </Container>
  )
};

export default Users;
