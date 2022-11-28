import { PersonProps } from './Person.types';

const Person = ({person}: PersonProps) => {
  const {fname, lname} = person
  return (
    <div>
      <h1>{fname} - {lname}</h1>
    </div>
  )
}

export default Person
