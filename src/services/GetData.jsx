export async function GetUserData(token) {
  let ApiUrl = "http://whcp.pl:3200/user";
  const response = await fetch(ApiUrl, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.json();
}
