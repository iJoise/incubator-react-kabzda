import React from 'react';

type OnOffPropsType = {
   on: boolean
   onChange: (value: boolean) => void
}

const OnOff:React.FC<OnOffPropsType> = ({on, onChange}) => {

   const onOff = {
      width: '30px',
      height: '20px',
      border: '1px solid black',
      display: 'inline-block',
      padding: '2px',
   }
   const onStyle = {
      ...onOff,
      backgroundColor: on ? 'green' : 'white',
   };
   const offStyle = {
      ...onOff,
      backgroundColor: on ? 'white' : 'red',
   };
   const indicatorStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      border: '1px solid black',
      display: 'inline-block',
      marginLeft: '5px',
      padding: '2px',
      backgroundColor: on ? 'green' : 'red',
   };

   return (
      <div>
         <div style={onStyle} onClick={() => {onChange(true)}}>On</div>
         <div style={offStyle} onClick={() => {onChange(false)}}>Off</div>
         <div style={indicatorStyle}/>
      </div>
   );
};

export default OnOff;
