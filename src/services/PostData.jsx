export async function PostData(type, requestData) {
  //api servis to testing!
  let ApiUrl = "";
  const response = await fetch(ApiUrl + type, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
  return response.json();
}
