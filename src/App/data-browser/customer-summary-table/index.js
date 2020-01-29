import React from "react"
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core"

const CustomerSummaryTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer ID</TableCell>
            <TableCell>Season ID</TableCell>
            <TableCell>Total Repaid</TableCell>
            <TableCell>Total Credit</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  )
}

export default CustomerSummaryTable
