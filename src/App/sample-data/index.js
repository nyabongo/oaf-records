import data from './data';

const { Customers, Seasons,CustomerSummaries } = data;

export function clearData() {

}

export function loadData() {
  localStorage.setItem('Customers', JSON.stringify(Customers))
  localStorage.setItem('Seasons', JSON.stringify(Seasons))
  localStorage.setItem('CustomerSummaries', JSON.stringify(CustomerSummaries))
}

export function uploadPayments() {

}