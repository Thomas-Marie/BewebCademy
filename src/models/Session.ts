import User from "./user"
import Badge from "./badge"
import Exercice from "./exercice"

export default interface Session {
    "_id": string
    "badges": Badge[],
    "exercices": Exercice[],
    "user": User
}