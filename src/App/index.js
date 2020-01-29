import React from 'react';
import {
  Button, Box, makeStyles, Typography,
} from '@material-ui/core';
import { loadData, uploadPayments, clearData } from './sample-data';
import DataBrowser from './data-browser';

const useClasses = makeStyles({
  buttons: {
    display: 'flex',
    padding: '8px',
    outline: ' 1px solid pink',
    '&>*': {
      margin: '4px',
    },
    '&>:last-child': {
      marginLeft: '32px',
    },
  },
});

function App() {
  const classes = useClasses();
  return (
    <>
      <Typography variant="h1">
        Records
      </Typography>
      <Box className={classes.buttons}>
        <Button variant="outlined" color="primary" onClick={loadData}>
          Load Data
        </Button>
        <Button variant="outlined" color="primary" onClick={uploadPayments}>
          Upload Payments
        </Button>
        <Button variant="outlined" color="secondary" onClick={clearData}>
          Clear Data
        </Button>
      </Box>
      <DataBrowser />
    </>
  );
}

export default App;
