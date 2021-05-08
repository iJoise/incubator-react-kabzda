import React, {useState} from 'react';

type OnOffPropsType = {
   onChange: (on: boolean) => void
}

const UnControledOnOff: React.FC<OnOffPropsType> = ({onChange}) => {

   let [on, setOn] = useState(false);

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

   const onClicked = () => {
      setOn(true);
      onChange(true);
   }
   const offClicked = () => {
      setOn(false)
      onChange(false)
   };

   return (
      <div>
         <div style={onStyle} onClick={onClicked}>On
         </div>
         <div style={offStyle} onClick={offClicked}>Off
         </div>
         <div style={indicatorStyle}/>
      </div>
   );
};

export default UnControledOnOff;
