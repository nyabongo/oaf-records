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
  function handleLoadData() {
    loadData();
    window.dispatchEvent(new Event('db-updated'));
  }
  function handleUpload() {
    uploadPayments();
    window.dispatchEvent(new Event('db-updated'));
  }
  function handleReset() {
    clearData();
    window.dispatchEvent(new Event('db-updated'));
  }
  return (
    <>
      <Typography variant="h1">
        Records
      </Typography>
      <Box className={classes.buttons}>
        <Button variant="outlined" color="primary" onClick={handleLoadData}>
          Load Data
        </Button>
        <Button variant="outlined" color="primary" onClick={handleUpload}>
          Upload Payments
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleReset}>
          Clear Data
        </Button>
      </Box>
      <DataBrowser />
    </>
  );
}

export default App;
