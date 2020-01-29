import React from 'react';
import CustomerSummaryTable from './customer-summary-table';
import RepaymentsTable from './repayments-table';

const DataBrowser = () => {
  return (
    <div style={{ padding: 16 }}>

      <CustomerSummaryTable />
      <RepaymentsTable />
    </div>
  );
};

export default DataBrowser;