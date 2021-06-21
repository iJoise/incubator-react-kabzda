import React, {useMemo, useState} from "react";
import {stat} from "fs";

export default {
   title: 'UseState Demo / UseState',
}

function generateData() {
   //difficult counting
   console.log('generate data')
   return 3213124324;
}

export const Example1 = () => {
   console.log('EXAMPLE render')

   // const initValue = useMemo(generateData, []);

   const [counter, setCounter] = useState(generateData);

   const changer = (state: number) => state + 1;

   return <>
      <button
         style={{width: '50px', height: '25px'}}
         onClick={() => setCounter(changer)}
      > +
      </button>
      {counter}
   </>
}