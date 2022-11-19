import Badge from "./badge";

export default interface Exercice{
    "badges": Badge,
    "name": string,
    "done": Boolean,
    "done_date": Date,
    "statement": string,
    "result": String,
    "help": String,
    "saved": any
}