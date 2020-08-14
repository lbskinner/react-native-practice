import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // if the api call has arguments can include ...args
  //   const request = async (...args) => {
  const request = async (...args) => {
    setLoading(true);
    // const response = await apiFunc();
    const response = await apiFunc(...args);
    setLoading(false);

    // if !response.ok setError(true), else setError(false)
    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
};
