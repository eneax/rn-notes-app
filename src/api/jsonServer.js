import axios from "axios";

export default axios.create({
  // Expires after 2 hours
  baseURL: "http://8428-2a02-8109-b63f-f2ec-7d69-3e06-3375-1b05.ngrok.io",
});
