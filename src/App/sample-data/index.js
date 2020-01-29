import data from './data';

const { Customers } = data;

export function clearData() {

}

export function loadData() {
  localStorage.setItem('Customers',JSON.stringify(Customers))
}

export function uploadPayments() {

}