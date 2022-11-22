import axios from "axios";
import BeforeDraft from "../models/beforeDraft"

const beforeDraft = axios.create({
  baseURL: "http://localhost:1010", // a modifié (actuellement il est sur 3000 (le meme que react))
});

export const getBeforeDrafts = async () => {
  try {
    const data = await beforeDraft.get("/");

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
    return data.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const createBeforeDraft = async (formData: BeforeDraft) => {
  try {
    await beforeDraft.post("/", { formData });

  } catch (error: any) {
    console.log(error.message);
  }
};

export const deleteBeforeDraftById = async (id: string) => {
  try {
    await beforeDraft.delete(`/${id}`);

  } catch (error: any) {
    console.log(error.message);
  }
};

export const updateBeforeDraft = async (id: string, formData: BeforeDraft) => {
  try {
    await beforeDraft.put(`/${id}`, { formData });
  } catch (error: any) {
    console.log(error.message);
  }
};
