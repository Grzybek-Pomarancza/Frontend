export async function PostData(type, requestData) {
  //api servis to testing!
  let ApiUrl = "http://whcp.pl:3200";
  const response = await fetch(ApiUrl + type, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(requestData),
  });
  return response.json();
}
