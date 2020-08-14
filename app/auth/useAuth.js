import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logout = () => {
    // logout user by setting it to null
    setUser(null);
    // remove user token info from storage
    authStorage.removeToken();
  };
  return { user, login, logout };
};
