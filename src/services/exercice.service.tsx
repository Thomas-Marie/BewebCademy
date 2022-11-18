import axios from "axios";
import Exercice from "../models/exercice"

const exercice = axios.create({
    baseURL: "http://localhost:4000"
})

export const getExercices = async() => {
    const exercices = await exercice.get('/')
    return exercices.data
}
