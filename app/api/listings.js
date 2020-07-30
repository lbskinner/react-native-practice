import client from "./client";

const endpoint = "/listings";
// if getListings has arguments, see below
// const getListings = (a, b, c) => client.get(endpoint);
const getListings = () => client.get(endpoint);

export default {
  getListings,
};
