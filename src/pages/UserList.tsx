import { useEffect, useState } from "react"
import { getUsers } from '../services/keycloak.service'
import User from '../models/user'
import { typeOf } from "react-is"
import NavBar from "../components/layout/NavBar"
import Header from "../components/layout/Header"

export default function UserList(props: any): any {

    const [users, setUsers] = useState<any>([])
  
    // useEffect(() => {
    //   const fetchUsers = async () => {
    //     const ResultGetUsers = await getUsers().then((result: any) => { return result })
    //     setUsers(ResultGetUsers)
    //   }
    //   fetchUsers().catch(console.error)
    // }, [])

return(
  <div>
    <Header />
    RIEN POUR LE MOMENT, ADD LISTE USERS
  </div>
)
// users.map((user: any) => {
//   console.log(user.id)    

// })
    // console.log(JSON.parse(users))

}