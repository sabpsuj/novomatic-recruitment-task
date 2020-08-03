import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import UsersList from './UsersList';
import { loadUsers } from '../../redux/actions/usersActions';

import { makeStyles } from '@material-ui/core/styles';
import usersTheme from "./Users";

const useStyles = makeStyles((theme) => (usersTheme));

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
