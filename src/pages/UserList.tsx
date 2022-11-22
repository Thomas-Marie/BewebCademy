import { useEffect, useState } from "react"
import { getUsers } from '../services/keycloak.service'
import User from '../models/user'

export default function UserList(props: any): any {

    const [Users, setUsers] = useState<User[]>([])
  
    useEffect(() => {
      const fetchUsers = async () => {
        const ResultGetUsers = await getUsers().then((result: any) => { return result })
        setUsers(ResultGetUsers)
      }
      fetchUsers().catch(console.error)
    }, [])

    console.log(Users)
}