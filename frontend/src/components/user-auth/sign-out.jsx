import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SignOut() {
  const classes = useStyles();
  const logOutBaseUrl = 'https://bsa-fibre.netlify.app/';

  const logout = () => {
    window.localStorage.clear();
    window.location.href = logOutBaseUrl + 'sign-in';
  };
  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
        onClick={logout}
      >
        Log Out
      </Button>
    </>
  );
}
