const userProfileTheme = {
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
};

export default userProfileTheme;