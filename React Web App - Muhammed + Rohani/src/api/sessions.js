import ky from "ky";

const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;

export const createSession = (loginDetails) =>
  ky.post(`${REACT_APP_BACKEND_ENDPOINT}/sessions`, { json: loginDetails }).json();
