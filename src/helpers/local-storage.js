export function saveLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}