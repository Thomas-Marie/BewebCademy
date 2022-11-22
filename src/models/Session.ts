import Badge from "./badge"
import Exercice from "./Exercice"
import User from "./User"

export default interface Session {
    "_id": string
    "badges": Badge[],
    "exercices": Exercice[],
    "user": User
}