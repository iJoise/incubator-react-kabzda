import React, {useMemo, useState} from "react";

export default {
   title: 'UseMemo/UseMemo',
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

export const ExampleMemo2 = () => {
   console.log('EXAMPLE2 render')
   const [counter, setCounter] = useState(0);
   const [users, setUsers] = useState(['Dimych', 'Valera', 'Kirill', 'Polina']);

   const newArray = useMemo(() => {
      const newUsersArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
      return newUsersArray
   }, [users]);

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
         style={{width: '100px', height: '25px'}}
         onClick={addUser}
      > add user
      </button>
      {counter}

      <Users users={newArray}/>
   </>
}


export const ExampleMemo = () => {

   const [a, setA] = useState<number>(3);
   const [b, setB] = useState<number>(3);

   let resultA = 1;
   let resultB = 1;

   resultA = useMemo(() => {
      let tempRes = 1;
      for (let i = 1; i <= a; i++) {
         let fake = 0;
         while (fake < 1000000000) {
            fake++;
         }
         tempRes = tempRes * i
      }
      return tempRes;
   }, [a]);

   for (let i = 1; i <= b; i++) {
      resultB = resultB * i
   }

   return <>
      <input type="text" value={a} onChange={(e) => {
         setA(+e.currentTarget.value)
      }}/>
      <input type="text" value={b} onChange={(e) => {
         setB(+e.currentTarget.value)
      }}/>
      <hr/>
      <br/>
      <div>
         resultA: {resultA}
      </div>
      <div>
         resultB: {resultB}
      </div>
   </>
}