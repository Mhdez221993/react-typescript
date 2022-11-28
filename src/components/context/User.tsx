import { UserContext } from "./UserContext"
import { useContext } from "react"

const User = () => {
  const userContext = useContext(UserContext)

  const handleLogin = () => {
      userContext.setUser({
        name: 'Doe',
        email: 'doe@example.com'
      })
  }

  const handleLogout = () => {
      userContext.setUser(null)
  }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {userContext?.user?.name}</div>
        <div>Email is {userContext?.user?.email}</div>
    </div>
  )
}

export default User
