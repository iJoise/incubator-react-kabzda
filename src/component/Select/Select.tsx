import React from 'react';
import s from "./Select.module.scss";


type ItemType = {
   title: string
   value: any
}
export type SelectPropsType = {
   collapsed: any
   onChange: (value: any) => void
   items: ItemType[]
   activeCities: string
   setActiveCities: (city: string) => void
}

export const Select: React.FC<SelectPropsType> = (
   {
      items,
      onChange,
      collapsed,
      activeCities,
      setActiveCities
   }) => {


   return (
      <div className={s.select}>
         <span className={s.select__span}>Cities</span>
         <h3 tabIndex={0} className={s.select__title} onClick={onChange}>{activeCities}</h3>
         {!collapsed && <ul className={s.select__nav}>
            {
               items.map(el => {
                  const changeSelectTitle = () => {
                     setActiveCities(el.title);
                     onChange(false)
                  }

                  return <li
                     className={s.select__list}
                     onClick={changeSelectTitle}
                     key={el.value}
                  >{el.title}
                  </li>
               })
            }
         </ul>}
      </div>
   );
}