const PROCALCULO_TOKEN = "procalculo_token";

export function saveToken(token) {
  localStorage.setItem(PROCALCULO_TOKEN, token);
}

export function deleteToken() {
  localStorage.removeItem(PROCALCULO_TOKEN);
}

export function getToken(params) {
  return localStorage.getItem(PROCALCULO_TOKEN);
}
