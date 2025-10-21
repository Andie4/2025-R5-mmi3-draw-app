
type Props = {
  users : {username: string} []
};

export const UserList = ({users} :Props) => {
  return (
   <div>
    <ul>
      <li>
      {users.map((user)=> <div key={user.username}>{user.username}</div>)}
      </li>
    </ul>
    
   </div>
  );
}

// |