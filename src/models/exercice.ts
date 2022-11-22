import Badge from "./badge";

export default interface ExerciceInterface {
    "_id": string,
    "badges": Badge,
    "name": string,
    "done": Boolean,
    "done_date": Date,
    "statement": string,
    "result": String,
    "help": String
}