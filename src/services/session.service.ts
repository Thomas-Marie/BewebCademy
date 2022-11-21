import axios from "axios";
import User from "../models/User";
import Session from "../models/Session";

const session = axios.create({
    baseURL: "http://localhost:2020/"
  }) 
  
  export const getSessionByUserId = async (idUser: string) => {
    try {
      const data = await session.get("/user/" + idUser)
      
      return data.data
    }
    catch(error: any) {
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
  catch(error: any){
    console.log(error.message);
  }
  };
  
  export const createSession = async (user: User) => {
    const newSession = await session.post("/", {
        badges: [],
        exercices: [],
        user
    })
    console.log(newSession.data);
    
    return newSession.data
  }