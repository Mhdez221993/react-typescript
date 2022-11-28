import { useState } from "react"

const User = () => {
  const [user, setUser] = useState<authUser | null>(null)

  type authUser = {
    name: string,
    email: string
  }

  const handleLogin = () => {
    setUser({
      name: 'Doe',
      email: 'doe@gamil.com'
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>Use is {user?.name} </div>
        <div>Use email is {user?.email} </div>
    </div>
  )
}

export default User
