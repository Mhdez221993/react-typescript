
export type ProfileProps = {
  name: string
}

const Profile = ({name}: ProfileProps) => {
  return (
    <div>
      Private profile component Name {name}
    </div>
  )
}

export default Profile
