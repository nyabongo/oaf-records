
function fetchRepayments() {
  return localStorage.getItem('Repayments') || []
};

function setRepayments(repayments) {
  localStorage.setItem('Repayments', JSON.stringify(repayments));
};

const saveRepayment = (amount, seasonID, customerID, date, parentID) => {
  const repayments = fetchRepayments();
  repayments.push({
    RepaymentID: repayments.length + 1,
    Amount: amount,
    SeasonID: seasonID,
    CustomerID: customerID,
    Date: date,
    ParentID: parentID || null
  });
  setRepayments(repayments);
};
export default saveRepayment

