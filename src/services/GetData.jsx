export async function GetUserData(token) {
  let ApiUrl = "/user";
  const response = await fetch(ApiUrl, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
