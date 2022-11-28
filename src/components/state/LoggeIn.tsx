import { useState } from "react"

const LoggeIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>Use is { isLoggedIn ? 'logged in' : 'logged out' }</div>
    </div>
  )
}

export default LoggeIn
