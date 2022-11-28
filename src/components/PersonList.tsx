type PersonListProps = {
  persons: {
    fname: string,
    lname: string
  }[]
}
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {
        props.persons.map((person) => <h2>{person.fname} {person.lname}</h2>)
      }
    </div>
  );
};

export default PersonList;