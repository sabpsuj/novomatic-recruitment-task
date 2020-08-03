import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Users from './users';
import TopBar from './_shared/TopBar';
import Footer from './_shared/Footer';
import UserProfile from './users/UserProfile';
import NewUserProfile from './users/NewUserProfile';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  mainContent: {
    flex: '1',
    backgroundColor: '#EEF0F1'
  }
}));

const App = () => {
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <div className={classes.mainContent}>
          <Router>
              <TopBar />
              <Route exact path="/" component={Users} />
              <Route path="/add-user" component={NewUserProfile} />
              <Route path="/user/:id" component={UserProfile} />
          </Router>
        </div>
        <Footer />
      </div>
  )
};

export default App;
