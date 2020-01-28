import saveRepayment from "./repayments/save-repayment";
import updateRepayment from "./customer-summaries/update-repayment";

export function addPayment(customerID, date, amount, seasonID) {
  saveRepayment(amount, seasonID, customerID, date);
  updateRepayment(customerID,seasonID,amount)
}