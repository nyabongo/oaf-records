import React, { useState } from 'react';
import CustomerSummaryTable from './customer-summary-table';
import RepaymentsTable from './repayments-table';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const DataBrowser = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, val) => {
    setValue(val)
  }
  return (
    <div style={{ padding: 16 }}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Repayments" />
          <Tab label="Customer Summary" />
        </Tabs>
      </AppBar>
      {value === 0 && <RepaymentsTable />}
      {value === 1 && <CustomerSummaryTable />}
    </div>
  );
};

export default DataBrowser;