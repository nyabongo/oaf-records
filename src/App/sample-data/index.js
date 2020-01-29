import data from './data';
import { addPayment } from '../../records';

const {
  Customers, Seasons, CustomerSummaries, RepaymentUploads,
} = data;

export function clearData() {
  localStorage.clear();
}

export function loadData() {
  localStorage.setItem('Customers', JSON.stringify(Customers));
  localStorage.setItem('Seasons', JSON.stringify(Seasons));
  localStorage.setItem('CustomerSummaries', JSON.stringify(CustomerSummaries));
}

export function uploadPayments() {
  RepaymentUploads.forEach(({
    CustomerID, Date: date, Amount, SeasonID,
  }) => {
    addPayment(CustomerID, date, Amount, SeasonID);
  });
}
