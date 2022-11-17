import axios from 'axios';


const badge = axios.create({
    baseURL: "http://localhost:2000"
})

export const getBadges = async() => {
    const badges = await badge.get('/')
    return badges.data
} 

getBadges();
