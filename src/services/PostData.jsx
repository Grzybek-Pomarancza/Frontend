export function PostData(type, requestData) {
  //api servis to testing!
  let ApiUrl = "";
  return new Promise((resolve, reject) => {
    fetch(ApiUrl + type, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}
export function GetUserData(token) {
  let ApiUrl = "/user/user";
  return new Promise((resolve, reject) => {
    fetch(ApiUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}
