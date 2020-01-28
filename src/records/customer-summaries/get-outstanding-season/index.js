function fetchCustomerSummaries() {
  return JSON.parse(localStorage.getItem('CustomerSummaries'));
}

function findEarliestOutstandingSeasonSummary(customerSummaries, customerID) {
  return customerSummaries.find(({ CustomerID, Credit, TotalRepaid }) => {
    if (CustomerID === customerID) {
      if (TotalRepaid < Credit) {
        return true;
      }
    }
    return false;
  });
}

function findLatestCustomerSummary(customerSummaries, customerID) {
  return customerSummaries.reverse().find(({ CustomerID }) => {
    return CustomerID === customerID;
  });
}

function getOutstandingSeason(customerID) {
  const customerSummaries = fetchCustomerSummaries();
  let summary = findEarliestOutstandingSeasonSummary(customerSummaries, customerID);
  if (!summary) {
    summary = findLatestCustomerSummary(customerSummaries, customerID)
  }
  return { seasonID: summary.SeasonID, outstandingAmount: summary.Credit - summary.TotalRepaid }

}

export default getOutstandingSeason;



