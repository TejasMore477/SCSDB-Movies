import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODllMGY1NzM0NzU4ZDgxZDRiNGY5ZmY2NmUwMTFiYiIsIm5iZiI6MTczNDE3NDY2OC4xMzc5OTk4LCJzdWIiOiI2NzVkNjdjYzQxZjM1M2NlMDg2Y2ZjODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JHMr-CLIGEtfveWoj7C0mppoIWL4UIZIvOefnAaEhR0",
  },
});


export default instance;