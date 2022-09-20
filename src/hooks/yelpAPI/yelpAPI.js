import queryString from "query-string";
import { API_BASE_URL, BEARER_TOKEN } from "./config";

const get = (path, queryParams) => {
  const query = queryString.stringify(queryParams);
  return fetch(`${API_BASE_URL}${path}?${query}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: true,
    },
  });
};

export default get;
