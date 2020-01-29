import saveRepayment from './repayments/save-repayment';
import updateRepayment from './customer-summaries/update-repayment';
import getOutstandingSeason from './customer-summaries/get-outstanding-season';

export function addPayment(customerID, date, amount, seasonID, parentPaymentID) {
  if (seasonID) {
    saveRepayment(amount, seasonID, customerID, date);
    updateRepayment(customerID, seasonID, amount);
    return;
  }
  const outstandingSeason = getOutstandingSeason(customerID);
  if (outstandingSeason === null) return;
  let paymentID;
  if (parentPaymentID) {
    saveRepayment(amount, outstandingSeason.seasonID, customerID, date, parentPaymentID);
    paymentID = parentPaymentID;
  } else {
    paymentID = saveRepayment(amount, outstandingSeason.seasonID, customerID, date);
  }
  updateRepayment(customerID, outstandingSeason.seasonID, amount);
  if (amount <= outstandingSeason.outstandingAmount) {
    return;
  }
  if (outstandingSeason.outstandingAmount > 0) {
    saveRepayment(outstandingSeason.outstandingAmount - amount,
      outstandingSeason.seasonID, customerID, date, paymentID);
    const overpay = amount - outstandingSeason.outstandingAmount;
    if (overpay > 0) {
      addPayment(customerID, date, overpay, undefined, paymentID);
    }
  }
}
export default addPayment;
