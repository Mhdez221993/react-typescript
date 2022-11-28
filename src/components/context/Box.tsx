import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"

const Box = () => {
  const theme = useContext(ThemeContext)

  return (
    <div
      style={{backgroundColor: theme.primary.main, color: theme.primary.text}}
    >
      Theme context
    </div>
  )
}

export default Box