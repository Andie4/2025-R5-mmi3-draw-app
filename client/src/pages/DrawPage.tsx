import { use, useEffect } from 'react'
import { AppHeader } from '../components/AppHeader/AppHeader'
import { DrawLayout } from '../components/DrawLayout/DrawLayout'
import { DrawSocket } from '../DrawSocket'
import { useMyUserStore } from '../store/useMyUserStore'
import { useUserListStore } from '../store/useAllUsers'
import { createMyUser } from '../utils/create-my-user'
import { Instructions } from '../components/Instructions/Instructions'
import { getInstructions } from '../utils/get-instructions'
import { UserList } from '../components/UserList/UserList'
import { DrawArea } from '../components/DrawArea/DrawArea'
// import { ListList, ListItem, List } from 'semantic-ui-react'

function DrawPage() {
  const setMyUser = useMyUserStore((state) => state.setMyUser)
  const setUserList = useUserListStore((state) => state.setUserList)
  const userList = useUserListStore((state) => state.userList); 


  const onClickJoin = () => {
    DrawSocket.emit("myUser:join", createMyUser() );
  }

  useEffect(() => {
    DrawSocket.listen("myUser:joined", (data) => {
      setMyUser(data.user);

      console.log("My User joined:success", data );
    });
    return () => {
      DrawSocket.off("myUser:joined");
    }
  }, [setMyUser]);




  useEffect(() => {
    DrawSocket.listen("users:updated", (data)=>{
      console.log("Users updated:", data);
      setUserList(data.users);
    });
    return () => {
      DrawSocket.off("users:updated");
    }

  }, [setUserList]);

  useEffect(() => {
    DrawSocket.get('users').then((data) => {
      if (data){
        setUserList(data.users);
      }});
      
  }, [setUserList]);

    




  return (
    <DrawLayout
      topArea={<AppHeader 
        onClickJoin={onClickJoin}
        
      />}
      rightArea={
        <>
          {/* <!-- Ajouter le composant TestUserList ici --> */}
          {/* <UserList users={[
            {username: 'Spider-man'},
            {username: 'toji'}
          ]}/> */}
          {/* <TestUserList /> */}
          {/* <List bulleted>
            <ListItem><UserList users={userList} /></ListItem>
          </List> */
          
          <UserList users={userList} />}

  
        </>
      }
      bottomArea={
        <>
          <Instructions>
            {getInstructions('toolbar')}
          </Instructions>
        </>
      }
    >
      {/* <Instructions>
        {getInstructions('draw-area')}
      </Instructions> */}
      <DrawArea/>
    </DrawLayout>
  )
}

export default DrawPage;
