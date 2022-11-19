import axios from "axios";
import BeforeDraft from "../models/beforeDraft"

const beforeDraft = axios.create({
  baseURL: "http://localhost:4000", // a modifié (actuellement il est sur 3000 (le meme que react))
});

export const getBeforeDrafts = async () => {
  try {
    const data = await beforeDraft.get("/");
    console.log("got the data captain!");
    await data.data.map((data: BeforeDraft) =>{
        data._id = data._id.toString()
      } )
    return data.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getBeforeDraftById = async (id: string) => {
  try {
    const data = await beforeDraft.get(`/${id}`);
    console.log("data du [beforeDraft] retrouvé");
    return data.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const createBeforeDraft = async (formData: BeforeDraft) => {
  try {
    await beforeDraft.post("/", { formData });
    console.log("beforeDraft Créé");
  } catch (error: any) {
    console.log(error.message);
  }
};

export const deleteBeforeDraftById = async (id: string) => {
  try {
    await beforeDraft.delete(`/${id}`);
    console.log("deletage pas de fromage");
  } catch (error: any) {
    console.log(error.message);
  }
};

export const UpdateBeforeDraft = async (id: string, formData: BeforeDraft) => {
  try {
    await beforeDraft.put(`/${id}`, { formData });
  } catch (error: any) {
    console.log(error.message);
  }
};
