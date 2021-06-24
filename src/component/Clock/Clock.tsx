import React, {useEffect, useState} from "react";
import s from "./Clock.module.scss";
import {setInterval} from "timers";

type ClockPropsType = {}


export const Clock: React.FC<ClockPropsType> = () => {

   const [date, setDate] = useState(new Date());
   const [clockMode, setClockMode] = useState(false);

   const [hr, setHr] = useState('');
   const [mn, setMn] = useState('');
   const [sc, setSc] = useState('');

   const deg = 6;
   let hh = date.getHours() * 30;
   let mm = date.getMinutes() * deg;
   let ss = date.getSeconds() * deg;


   useEffect(() => {
      setHr(`rotateZ(${(hh) + (mm / 12)}deg)`)
      setMn(`rotateZ(${mm}deg)`)
      setSc(`rotateZ(${ss}deg)`)
      const interval = setInterval(() => {
         setDate(new Date());
      }, 1000)
      return () => {
         clearInterval(interval)
      };
   }, [hh, mm, ss]);


   const getDigitsString = (num: number) => num < 10 ? '0' + num : num;

   return (
      <div>
         <button
            style={{width: "200px", height: '40px', marginBottom: '10px'}}
            onClick={() => setClockMode(false)}
         >Analog
         </button>
         <button
            style={{width: "200px", height: '40px', marginBottom: '40px'}}
            onClick={() => setClockMode(true)}
         >Digital
         </button>
         {
            clockMode
               ? <div className={s.clock_wr}>
                  <span className={s.clock_item}>{getDigitsString(date.getHours())}</span>
                  :
                  <span className={s.clock_item}>{getDigitsString(date.getMinutes())}</span>
                  :
                  <span className={s.clock_item}>{getDigitsString(date.getSeconds())}</span>
               </div>
               : <div className={s.clock}>
                  <div className={s.hour}>
                     <div style={{transform: hr}} className={s.hr}/>
                  </div>
                  <div className={s.min}>
                     <div style={{transform: mn}} className={s.mn}/>
                  </div>
                  <div className={s.sec}>
                     <div style={{transform: sc}} className={s.sc}/>
                  </div>
               </div>
         }
      </div>
   )
}
