import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    padding: '0 24px 24px'
  },
  listItem: {
    borderRadius: '4px',
    border: '1px solid #EEF0F1',
    margin: '12px 0'
  },
  avatar: {
    width: '120px',
    height: '90px',
    borderRadius: '0'
  },
  link: {
    textDecoration: 'none',
    color: '#000'
  }
}));

const UsersList = () => {
  const users = useSelector(state => state.users.data);
  const classes = useStyles();
  let lengths = [];

  lengths.push(users.length);
  console.log(lengths);

  return (
    <List className={classes.list}>
      {users.map(user => (
        <Link to={`/user/${user.id}`} key={`user-${user.id}`} className={classes.link}>
          <ListItem className={classes.listItem}>
            <ListItemText
              primary={
                <>
                  <Typography variant="overline">{`ID: ${user.id}`}</Typography>
                  <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
                </>
              }
              secondary={user.email}
            />
            <ListItemAvatar>
              <Avatar alt={`${user.first_name} ${user.last_name}`} src={`${user.avatar}`} className={classes.avatar}/>
            </ListItemAvatar>
          </ListItem>
        </Link>
      ))}
    </List>
  )
};

export default UsersList;
