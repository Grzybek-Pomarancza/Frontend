export function PostData(type, userData) {
  //api servis to testing!
  let ApiUrl = "https://api.thewallscript.com/restful/";
  return new Promise((resolve, reject) => {
    fetch(ApiUrl + type, {
      method: "POST",
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