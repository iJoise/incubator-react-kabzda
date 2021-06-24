import React, {useEffect, useMemo, useState} from "react";
import {stat} from "fs";

export default {
   title: 'UseEffect Demo / UseEffect',
}
export const SimpleExample = () => {
   const [counter, setCounter] = useState(1);
   const [fake, setFake] = useState(1);

   console.log('SimpleExample render');

   useEffect(() => {
      /**
       * side effect:
       * api.getUser().then => async, promise
       * setInterval
       * indexedDB
       * document.getElement
       * document.title = 'User'
       */
      console.log('UseEffect every render')
      document.title = counter.toString();
   });

   useEffect(() => {
      console.log('UseEffect only first render (componentDidMount)')
      document.title = counter.toString();
   }, []);

   useEffect(() => {
      console.log('UseEffect first render and evey counter changed')
      document.title = counter.toString();
   }, [counter]);

   return (
      <>
         Hello, {counter} {fake}
         <button onClick={ () => setFake(fake + 1) }>fake +</button>
         <button onClick={ () => setCounter(counter + 1) }>cointer +</button>
      </>
   )


}

export const SetTimeoutExample = () => {
   const [counter, setCounter] = useState(1);
   const [fake, setFake] = useState(1);

   console.log('SetTimeoutExample run');

   useEffect(() => {
      const interval = setInterval(() => {
         setCounter( (state: number) => state + 1)
      }, 1000)

      return () => {
         clearInterval(interval)
      }
   }, []);




   return (
      <>
         Hello,
         <div>counter:{counter} </div>
         <div>fake :{fake}</div>
         {/*<button onClick={ () => setFake(fake + 1) }>fake +</button>*/}
         {/*<button onClick={ () => setCounter(counter + 1) }>counter +</button>*/}
      </>
   )
}

