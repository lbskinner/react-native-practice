import client from "./client";

// client includes the authentication token in the header
const register = (pushToken) =>
  client.post("/expoPushTokens", { token: pushToken });

export default {
  register,
};
