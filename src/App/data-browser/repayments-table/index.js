import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from '@material-ui/core';

const useClasses = makeStyles({
  tableContainer: {
  },
  header: {
    fontWeight: 'bold',
    '& >*': {
    },
  },
});

function fetchRepayments() {
  return JSON.parse(localStorage.getItem('Repayments') || '[]');
}
const RepaymentsTable = () => {
  const classes = useClasses();
  const repayments = fetchRepayments();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table size="small">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell className={classes.header} align="center">Customer ID</TableCell>
            <TableCell className={classes.header}>Season ID</TableCell>
            <TableCell className={classes.header}>Date</TableCell>
            <TableCell className={classes.header}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repayments.map(({
            CustomerID, SeasonID, Date: date, Amount,
          }, i) => {
            const key = `repayments-${i}-${CustomerID}-${SeasonID}`;
            return (
              <TableRow data-testid={`row-${i}`} key={key}>
                <TableCell align="center">{CustomerID}</TableCell>
                <TableCell align="left">{SeasonID}</TableCell>
                <TableCell align="left">{date}</TableCell>
                <TableCell align="left">{Amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RepaymentsTable;
