import React, {useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4| 5

export type RatingPropsType = {
    defaultValue?: RatingValueType
   onChange: (value: RatingValueType) => void
}

export function UnControledRaiting({defaultValue, onChange}: RatingPropsType) {

   let [value, setValue] = useState<RatingValueType>(defaultValue ? defaultValue : 0)

   return (
      <div>
         <Star selected={value > 0} setValue={() => {setValue(1); onChange(1);} } />
         <Star selected={value > 1} setValue={() => {setValue(2); onChange(2);} } />
         <Star selected={value > 2} setValue={() => {setValue(3); onChange(3);} } />
         <Star selected={value > 3} setValue={() => {setValue(4); onChange(4);} } />
         <Star selected={value > 4} setValue={() => {setValue(5); onChange(5);} } />
      </div>
   );
}

type StarPropsType = {
   selected: boolean
   setValue: () => void
}

const Star: React.FC<StarPropsType> = ({selected, setValue}) => {
   return <span onClick={() => {
      setValue()
   }}>
      {selected ? <b>star </b> : 'star '}
   </span>
}
