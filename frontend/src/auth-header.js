export default function authHeader() {
  let token = localStorage.getItem("token");

  if (token) {
    return { "x-access-token": token };
  } else {
    return {};
  }
}
