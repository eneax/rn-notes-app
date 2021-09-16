import axios from "axios";

// Expires after 2 hours
const NGROK_URL =
  "http://8428-2a02-8109-b63f-f2ec-7d69-3e06-3375-1b05.ngrok.io";

export default axios.create({
  baseURL: NGROK_URL,
});
