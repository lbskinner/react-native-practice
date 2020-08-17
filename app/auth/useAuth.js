import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    console.log(authToken);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    // logout user by setting it to null
    setUser(null);
    // remove user token info from storage
    authStorage.removeToken();
  };
  return { user, logIn, logOut };
};
