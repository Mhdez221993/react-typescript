type GreetProps = {
  name: string,
  messageCount?: number,
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  const {messageCount = 0, isLoggedIn, name} = props
  return (
    <div>
      {
        isLoggedIn ? <h1>Welcome {name} you have {messageCount} messages</h1> : <h1>Welcome Guest</h1>
      }
    </div>
  )
}

export default Greet