import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

const fetchImages = async ({
  client_id,
  page,
  per_page,
  query,
  orientation,
}) => {
  const response = await axios.get("", {
    params: { client_id, page, per_page, query, orientation },
  });
  return response.data;
};

export default fetchImages;
