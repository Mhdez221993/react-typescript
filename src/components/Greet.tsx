type GreetProps = {
  name: string
}

const Greet = (props: GreetProps) => {
  return (
    <div>
        <h1>Welcome {props.name}</h1>
    </div>
  )
}

export default Greet