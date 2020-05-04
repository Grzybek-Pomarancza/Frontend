export function PostData(type, userData) {
  //api servis to testing!
  let ApiUrl = "";
  return new Promise((resolve, reject) => {
    fetch(ApiUrl + type, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.login;
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}
