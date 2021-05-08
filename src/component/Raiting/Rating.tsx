import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
   value: RatingValueType
   onClick: (value: RatingValueType) => void
}

function Rating({value, onClick}: RatingPropsType) {
   return (
      <div>
         <Star value={1} onClick={onClick} selected={value > 0}/>
         <Star value={2} onClick={onClick} selected={value > 1}/>
         <Star value={3} onClick={onClick} selected={value > 2}/>
         <Star value={4} onClick={onClick} selected={value > 3}/>
         <Star value={5} onClick={onClick} selected={value > 4}/>
      </div>
   );
}

type StarPropsType = {
   selected: boolean
   onClick: (value: RatingValueType) => void
   value: RatingValueType
}

function Star({selected, value, onClick}: StarPropsType) {
   return <span onClick={() => {
      onClick(value)
   }}>
      {selected ? <b>star </b> : 'star '}
   </span>
}

export default Rating;
