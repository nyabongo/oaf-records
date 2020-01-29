import data from './data';

const { Customers, Seasons } = data;

export function clearData() {

}

export function loadData() {
  localStorage.setItem('Customers', JSON.stringify(Customers))
  localStorage.setItem('Seasons', JSON.stringify(Seasons))
}

export function uploadPayments() {

}