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

export const SetIntervalExample = () => {
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
      </>
   )
}


export const KeysTrackerExample = () => {
   const [text, setText] = useState('');

   console.log(`Component render with ${text}`);

   useEffect(() => {
      const handler = (e: KeyboardEvent) => {
         console.log(e.key);
         setText(text + e.key);
      }

      window.addEventListener('keypress', handler);
      return () => {
         window.removeEventListener('keypress', handler);
      }
   }, [text]);

   return (
      <>
         Typed text: {text}
      </>
   )

}

export const SetTimeoutExample = () => {
   const [text, setText] = useState('');

   console.log(`Component render with ${text}`);

   useEffect(() => {

      const timeoutID = setTimeout(() => {
         console.log('Timeout expired')
         setText('3 second passed')
      }, 3000)

      return () => {
         clearTimeout(timeoutID);
      }
   }, [text]);

   return (
      <>
         Typed text: {text}
      </>
   )

}

