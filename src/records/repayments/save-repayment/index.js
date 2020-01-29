
function fetchRepayments() {
  return JSON.parse(localStorage.getItem('Repayments') || '[]')
};

function setRepayments(repayments) {
  localStorage.setItem('Repayments', JSON.stringify(repayments));
};

const saveRepayment = (amount, seasonID, customerID, date, parentID) => {
  const repayments = fetchRepayments();
  const repaymemntID = repayments.length + 1;
  repayments.push({
    RepaymentID: repaymemntID,
    Amount: amount,
    SeasonID: seasonID,
    CustomerID: customerID,
    Date: date,
    ParentID: parentID || null
  });
  setRepayments(repayments);
  return repaymemntID;
};
export default saveRepayment

