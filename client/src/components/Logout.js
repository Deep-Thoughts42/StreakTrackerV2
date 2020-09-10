import React, {useContext} from "react"
import { AuthContext } from "./AuthContext"
import { useHistory } from "react-router-dom"

function Logout() {

    const authContextVal = useContext(AuthContext)
    let history = useHistory()
    authContextVal.logout()
    localStorage.removeItem("user")

    history.push("./")



    return null

}

export default Logout;
// comment test