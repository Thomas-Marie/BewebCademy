import Language from './Language';

export default interface Badge{
    "name": String,
    'language': Language,
    "image": String,
    "acquisition_date": Date,
    "all_done": Boolean
}
