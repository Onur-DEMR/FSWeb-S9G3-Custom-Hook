export default function localStorageKullan(key, value) {
  function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return { setItem, getItem, key, value };
}
