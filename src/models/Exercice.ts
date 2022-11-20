import Badge from "./Badge";

export default interface Exercice{
    "_id": string,
    "badges": Badge,
    "name": string,
    "done": Boolean,
    "done_date": Date,
    "statement": string,
    "result": String,
    "help": String
}