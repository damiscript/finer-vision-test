import server from "../api/server";

/**
 * Fetches all the users from the database
 * @returns
 */
export const fetchUsers = async () => {
  const request = await server.get(`/users`).catch(err => {
    console.log(err);
    return null;
  });
  if (!request) {
    return null;
  }
  return request.data;
};

/**
 * Sends the user data to the database to be created
 * @param {Object} data the user data sent to the database via the body
 * @returns
 */
export const createUser = async data => {
  await server.post("/users", data).catch(err => {
    console.error(err);
  });
};
