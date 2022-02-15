import {
  BASE_URL,
  PASSWORD_GRANT_TYPE,
  CUSTOM_CLIENT_ID,
  CLIENT_SECRET,
  CLIENT_CREDENTIAL_GRANT_TYPE,
  ADMIN_CLIENT_ID,
  CUSTOM_REALM,
} from "./requestSettings";

const xformurlencoder = (bodyFields) => {
  let encodedStr = "";

  for (let field in bodyFields) {
    if (encodedStr) {
      encodedStr += "&";
    }
    encodedStr += field + "=" + bodyFields[field];
  }

  return encodedStr;
};

export default {

  // LOGIN USER AND GET TOKENS
  loginUser: async (username, password) => {
    let loginInfo = {
      username: username,
      password: password,
      grant_type: PASSWORD_GRANT_TYPE,
      client_id: CUSTOM_CLIENT_ID,
    };

    const body = xformurlencoder(loginInfo);

    return await fetch(
      BASE_URL + "/auth/realms/" + CUSTOM_REALM +"/protocol/openid-connect/token",
      {
        body: body,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["error"]) return { error: data };
        return data;
      })
      .catch((err) => console.log(err.message));
  },


  // GET USER INFORMATION
  getUser: async (token) => {
    return await fetch(
      BASE_URL +
        "/auth/realms/" +
        CUSTOM_REALM +
        "/protocol/openid-connect/userinfo",
      {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
        },
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data["error"]) return { error: data };
        return data;
      })
      .catch((err) => {
        console.log(err.message);
        return err;
      });
  },
  

  // GET THE ADMIN TOKEN
  getAdminToken: async () => {
    const adminTokenInfo = {
      "client_secret": CLIENT_SECRET,
      "grant_type": CLIENT_CREDENTIAL_GRANT_TYPE,
      "client_id": ADMIN_CLIENT_ID,
    };

    const body = xformurlencoder(adminTokenInfo);

    return await fetch(
      BASE_URL +
        "/auth/realms/" +
        CUSTOM_REALM +
        "/protocol/openid-connect/token",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data["error"]) return { error: data };
        return data;
      })
      .catch((err) => {
        console.log(err.message);
        return err;
      });
  },


  // REGISTER A NEW USER
  registerUser: async (firstName, lastName, email, username, password, token) => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      enabled: true,
      credentials: [
        {
          value: password,
          type: "password",
          temporary: false,
        },
      ],
    };

    return await fetch(
      BASE_URL + "/auth/admin/realms/" + CUSTOM_REALM + "/users",
      {
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        method: "POST",
        body: JSON.stringify(body),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data["error"]) return { error: data };
        return data;
      })
      .catch((err) => {
        console.log(err.message);
        return err;
      });
  },


  // LOGOUT A USER SESSION
  logoutUser: async (refreshToken) => {
    const logoutInfo = {
      client_id: CUSTOM_CLIENT_ID,
      refresh_token: refreshToken,
    };

    const body = xformurlencoder(logoutInfo);

    return await  fetch(
      BASE_URL + "/auth/realms/" + CUSTOM_REALM +"/protocol/openid-connect/logout",
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body,
        method: "POST",
      }
    )
      .then((res) => res.json)
      .then(() => ({ success: true }))
      .catch((err) => {
        console.log(err.message);
        return err;
      });
  },


  // UPDATE USER PASSWORD
  updatePassword: async (newPassword, userId) => {
    const body = {
      temporary: false,
      value: newPassword,
      type: "password",
    };

    return await fetch(
      BASE_URL + `/auth/admin/realms/${CUSTOM_REALM}/users/${userId}/reset-password`,
      {
        body: JSON.stringify(body),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(() => ({ success: true }))
      .catch((err) => {
        console.log(err.message);
        return err;
      });
  },
};
