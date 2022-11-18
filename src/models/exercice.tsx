import Badge from "./badge"
export default interface Exercice{
    "badges": [Badge],
    "name": string,
    "language": string,
    "done": Boolean,
    "done_date": Date,
    "statement": string,
    "result": any,
    "saved": any
}