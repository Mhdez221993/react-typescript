import { useState } from "react"

type AuthUser = {
  name: string,
  email: string
}

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)


  const handleLogin = () => {
    setUser({
      name: 'Doe',
      email: 'doe@gamil.com'
    })
  }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <div>User is {user.name} </div>
        <div>User email is {user.email} </div>
    </div>
  )
}

export default User
