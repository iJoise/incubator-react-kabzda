import React, {useState} from "react";

export default {
   title: 'ReactMemo/Memo',
}

const Counter = (props: { count: number }) => {
   return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
   console.log('USERS render')
   return <div>
      {
         props.users.map((u, i) => <div key={i}>{u}</div>)
      }
   </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
   console.log('EXAMPLE render')
   const [counter, setCounter] = useState(0);
   const [users, setUsers] = useState(['Dimych', 'Valera', 'Kirill', 'Polina']);

   const addUser = () => {
      setUsers([...users, `Sveta${new Date().getTime()}`])
   }
   return <>
      <button
         style={{width: '50px', height: '25px'}}
         onClick={() => setCounter(counter + 1)}
      > +
      </button>
      <button
         style={{width: '50px', height: '25px'}}
         onClick={addUser}
      > add user
      </button>

      <Counter count={counter}/>
      <Users users={users}/>
   </>
}