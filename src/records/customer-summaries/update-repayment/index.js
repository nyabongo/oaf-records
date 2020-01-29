import { fetchAll } from "../fetch-summaries";

const updateRepaymentSummary = (customerID, seasonID, amount) => {
  const summaries = fetchAll();
  const updated = summaries.map(entry => {
    if (entry.CustomerID === customerID) {
      if (entry.SeasonID === seasonID) {
        return {
          ...entry,
          TotalRepaid: entry.TotalRepaid + amount
        }
      }
    }
    return entry;
  });
  localStorage.setItem('CustomerSummaries',JSON.stringify(updated))
}

export default updateRepaymentSummary;