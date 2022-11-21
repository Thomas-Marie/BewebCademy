import axios from "axios";

const draft = axios.create({
  baseURL: "http://localhost:1010/",
});


// check draft open or not and return boolean
export const checkDreaftOpen = async () => {
  const res = await draft.get("/draft/check");
  return res.data;
}

