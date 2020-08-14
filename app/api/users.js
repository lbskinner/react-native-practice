import client from "./client";

// instead of having three parameters (name, email, password),
// used a single object
const register = (userInfo) => client.post("/users", userInfo);

export default { register };
