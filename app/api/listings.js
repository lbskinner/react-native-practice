import client from "./client";

const endpoint = "/listings";
// if getListings has arguments, see below
// const getListings = (a, b, c) => client.get(endpoint);
const getListings = () => client.get(endpoint);

const addListing = (listing) => {
  // content-type in header to specify the data type, by default it is application/json
  // need to send images - need to use multipart/form-data
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("image", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, data);
};

export default {
  addListing,
  getListings,
};
