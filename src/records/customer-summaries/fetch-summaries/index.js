export function fetchAll() {
  return JSON.parse(localStorage.getItem('CustomerSummaries') || '[]');
}

export default fetchAll;
