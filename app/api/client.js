import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.1.15:9000/api",
});

// if can't call the server, use data from cache if available
// need to change the implementation of the get method
// first store reference to the apiClient.get method and store it in a constant
const get = apiClient.get;
// then redefine apiClient.get, takes in the same parameters as the old get method so can use tit he same way
apiClient.get = async (url, params, axiosConfig) => {
  // call the original get method
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    // if get data successfully, store the data in cache
    // url is the key, response.data is the value
    cache.store(url, response.data);
    // need to return the same object as the original get function
    return response;
  }

  // if get data not successful, get data from cache
  const data = await cache.get(url);
  // return data if data exist otherwise return original response
  // because original response contains information on why the call to the server failed
  return data ? { ok: true, data } : response;
};

export default apiClient;
