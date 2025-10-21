
type Props = {
  users : {username: string} []
};

export const UserList = ({users} :Props) => {
  return (
   <div>
    {users.map((user)=> <div key={user.username}>{user.username}</div>)}
   </div>
  );
}

// |