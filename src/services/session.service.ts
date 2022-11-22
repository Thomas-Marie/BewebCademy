import axios from "axios";
import User from "../models/user";
import Session from "../models/session";

const session = axios.create({
  baseURL: "http://localhost:2020"
})

export const getSessionByUserId = async (id: string) => {
  try {
    const data = await session.get(`/user/${id}`)

    return data.data
  }
  catch (error: any) {
    console.log(error.message);
  }
}


export const getSessions = async () => {
  try {
    const sessions = await session.get("/");

    await sessions.data.map((session: Session) => {
      session._id = session._id.toString();
    });
    return sessions.data;
  }
  catch (error: any) {
    console.log(error);
  }
};

export const createSession = async (formData: User) => {
  const newSession = await session.post("/", {
    badges: [],
    exercices: [],
    user: formData
  })
  console.log("up");
  console.log(newSession.data);

  return newSession.data
}
