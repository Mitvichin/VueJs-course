import axios from "axios";

const instance = axios.create({
  baseURL: "https://vuejs-axios-test-5d2ed.firebaseio.com/"
});

instance.defaults.headers.common["SOMETHING"] = "SOMETHING";

export default instance;
