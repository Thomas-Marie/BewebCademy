import { useEffect, useState } from "react"
import { getUsers } from '../services/user.service'
import User from '../models/user'

export default function UserList(props: any): any {

    const [Users, setUsers] = useState<User[]>([])
  
    useEffect(() => {
      const fetchBadges = async () => {
        const ResulGetBadges = await getUsers().then((result: any) => { return result })
        setBadges(ResulGetBadges)
        // console.log(badges[0].language[0])
      }
      fetchBadges().catch(console.error)
    }, [])
}