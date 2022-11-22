import { useEffect, useState } from "react"
import User from '../models/user'
import { getUsers } from "../services/keycloak.service"

const UserList = (props: any) => {

    // const [Users, setUsers] = useState<User[]>([])

    // useEffect(() => {
    //     const fetchBadges = async () => {
    //         const ResulGetBadges = await getUsers().then((result: any) => { return result })
    //         setBadges(ResulGetBadges)
    //         // console.log(badges[0].language[0])
    //     }
    //     fetchBadges().catch(console.error)
    // }, [])

    return (
        <>
        </>
    )
}

export default UserList;