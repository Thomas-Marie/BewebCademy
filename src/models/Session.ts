import User from "./User"
import Badge from "./Badge"
import Exercice from "./Exercice"

export default interface Session {
    "_id": string
    "badges": Badge[],
    "exercices": Exercice[],
    "user": User
}