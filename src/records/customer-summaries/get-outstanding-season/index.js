import { fetchAll } from "../fetch-summaries";

function sortBySeason(a, b) {
  if (a.SeasonID < b.SeasonID) {
    return -1
  }
  if (a.SeasonID > b.SeasonID) {
    return 1
  }
  return 0
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
  const customerSummaries = fetchAll().sort(sortBySeason);
  let summary = findEarliestOutstandingSeasonSummary(customerSummaries, customerID);
  if (!summary) {
    summary = findLatestCustomerSummary(customerSummaries, customerID)
  }
  if (!summary) {
    return null;
  }
  return { seasonID: summary.SeasonID, outstandingAmount: summary.Credit - summary.TotalRepaid }

}

export default getOutstandingSeason;



