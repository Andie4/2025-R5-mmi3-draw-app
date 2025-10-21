import { use, useEffect } from 'react'
import { AppHeader } from '../components/AppHeader/AppHeader'
import { DrawLayout } from '../components/DrawLayout/DrawLayout'
import { DrawSocket } from '../DrawSocket'
import { useMyUserStore } from '../store/useMyUserStore'
import { createMyUser } from '../utils/create-my-user'
import { Instructions } from '../components/Instructions/Instructions'
import { getInstructions } from '../utils/get-instructions'
import { UserList } from '../components/UserList/UserList'

function DrawPage() {
  const setMyUser = useMyUserStore((state) => state.setMyUser)


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




// add set user list
    




  return (
    <DrawLayout
      topArea={<AppHeader 
        onClickJoin={onClickJoin}
        
      />}
      rightArea={
        <>
          <Instructions>
            {getInstructions('user-list')}
          </Instructions>
          {/* <!-- Ajouter le composant TestUserList ici --> */}
          <UserList users={[
            {username: 'Spider-man'},
            {username: 'toji'}
          ]}/>
          {/* <TestUserList /> */}
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
      <Instructions>
        {getInstructions('draw-area')}
      </Instructions>
      {/* <TestDrawArea /> */}
    </DrawLayout>
  )
}

export default DrawPage;
