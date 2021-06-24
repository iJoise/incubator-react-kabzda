import React, {useEffect, useState} from "react";
import s from "./Clock.module.scss";
import {setInterval} from "timers";

type ClockPropsType = {}


export const Clock: React.FC<ClockPropsType> = () => {

   const [date, setDate] = useState(new Date());

   useEffect(() => {
      const intervalID = setInterval(() => {
         console.log('TICK')
         setDate(new Date())
      }, 1000)
      return () => {
         clearInterval(intervalID);
      }
   },[]);

   const getDigitsString = (num: number) => num < 10 ? '0' + num : num;

   return (
      <div className={s.clock_wr}>
         <span className={s.clock_item}>{getDigitsString(date.getHours())}</span>
         :
         <span className={s.clock_item}>{getDigitsString(date.getMinutes())}</span>
         :
         <span className={s.clock_item}>{getDigitsString(date.getSeconds())}</span>
      </div>
   )
}
