import saveRepayment from "./repayments/save-repayment";
import updateRepayment from "./customer-summaries/update-repayment";
import getOutstandingSeason from "./customer-summaries/get-outstanding-season";

export function addPayment(customerID, date, amount, seasonID) {
  if (seasonID) {
    saveRepayment(amount, seasonID, customerID, date);
    updateRepayment(customerID, seasonID, amount)
    return
  }
  const outStandingSeason = getOutstandingSeason(customerID)
  saveRepayment(amount, outStandingSeason.seasonID, customerID, date);
  updateRepayment(customerID,outStandingSeason.seasonID, amount)
}