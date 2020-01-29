import React from "react"
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles
} from "@material-ui/core"
import { fetchAll } from "../../../records/customer-summaries/fetch-summaries"

const useCustomerSummary = () => {
  return fetchAll();
}
const useClasses = makeStyles({
  tableContainer: {
  },
  header: {
    fontWeight: 'bold',
    '& >*': {
    }
  }
})

const CustomerSummaryTable = () => {
  const summaries = useCustomerSummary();
  const classes = useClasses()
  return (
    <TableContainer component={Paper} className={classes.tableContainer} >
      <Table size="small">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell className={classes.header} align="center" >Customer ID</TableCell>
            <TableCell className={classes.header} >Season ID</TableCell>
            <TableCell className={classes.header} >Total Repaid</TableCell>
            <TableCell className={classes.header} >Total Credit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summaries.map(({ CustomerID, SeasonID, TotalRepaid, Credit }, i) => {
            const key = CustomerID + '-' + SeasonID;
            return (
              <TableRow data-testid={`row-${i}`} key={key} >
                <TableCell align="center" >{CustomerID}</TableCell>
                <TableCell align="left" >{SeasonID}</TableCell>
                <TableCell align="left" >{TotalRepaid}</TableCell>
                <TableCell align="left" >{Credit}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomerSummaryTable
