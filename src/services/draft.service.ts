import axios from "axios";

const draft = axios.create({
  baseURL: "http://api.bewebcademy.my/before-draft",
});


// check draft open or not and return boolean
export const checkDreaftOpen = async () => {
  const res = await draft.get("/draft/check");
  return res.data;
}