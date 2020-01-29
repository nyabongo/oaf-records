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

class Service {
  constructor(summaries) {
    localStorage.clear();
    localStorage.setItem('CustomerSummaries', JSON.stringify(summaries));
    this.summaries = summaries;
  }

  uploadPayments(payments) {
    localStorage.clear();
    localStorage.setItem('CustomerSummaries', JSON.stringify(this.summaries));
    payments.forEach(({
      CustomerID, Date: date, Amount, SeasonID,
    }) => {
      addPayment(CustomerID, date, Amount, SeasonID);
    });
    this.summaries = JSON.parse(localStorage.getItem('CustomerSummaries'));
    this.payments = JSON.parse(localStorage.getItem('Repayments'));
  }

  printSummaries() {
    console.table(this.summaries);
  }

  printRepayments() {
    if (this.payments) {
      console.table(this.payments);
    }
  }
}
window.RepaymentService = Service;
window.sampleData = data;
