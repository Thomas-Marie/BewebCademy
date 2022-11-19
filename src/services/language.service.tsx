import axios from "axios";
import Language from "../models/language"

const language = axios.create({ 
    baseURL: "http://localhost:9000/"
})

export const getLanguage = (id: string) => {
    return language.get("/" + id)
}

export const getLanguages = async() => {
    const languages = await language.get("/")
    
    return languages.data
}

export const updateLanguage = (id: string, newLanguage: Language) => {
    language.put("/"+id, newLanguage)
}