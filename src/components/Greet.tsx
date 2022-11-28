type GreetProps = {
  name: string,
  messageCount: number,
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      {
        props.isLoggedIn ? `<h1>Welcome ${props.name} you have ${props.messageCount} messages</h1>` : <h1>Welcome Guest</h1>
      }
    </div>
  )
}

export default Greet