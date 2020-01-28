function getOutstandingSeason(customerID) {
  const customerSummaries = JSON.parse(localStorage.getItem('CustomerSummaries'));
  let summary = customerSummaries.find(({ CustomerID, Credit, TotalRepaid }) => {
    if (CustomerID === customerID) {
      if (TotalRepaid < Credit) {
        return true;
      }
    }
    return false;
  });
  if (!summary) {
    summary = customerSummaries.reverse().find(({ CustomerID }) => {
      return CustomerID === customerID
    })
  }
  return { seasonID: summary.SeasonID, outstandingAmount: summary.Credit - summary.TotalRepaid }

}

export default getOutstandingSeason;