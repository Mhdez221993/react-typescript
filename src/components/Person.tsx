
type PersonProps = {
  person: {
    fname: string,
    lname: string
  }
}

const Person = (props: PersonProps) => {
  const {fname, lname} = props.person
  return (
    <div>
      <h1>{fname} - {lname}</h1>
    </div>
  );
};

export default Person;