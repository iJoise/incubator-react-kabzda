import {ChangeEvent, useRef, useState} from "react";


export default {
   title: 'input/input',
   // component: Button,
}



export const UncontrolledInput = () => <input/>

export const TrackValueOfControlledInput = () => {
   const [value, setValue] = useState('');
   const changeEventInput = (event: ChangeEvent<HTMLInputElement>) => {
      const actualValue = event.currentTarget.value;
      setValue(actualValue);
   };
   return <>
      <input onChange={changeEventInput}/> {value}
   </>
}

export const GetValueOfUnControlledInputByButtonPress = () => {
   const [value, setValue] = useState('');
   //создаём хук Реф
   const inputRef = useRef<HTMLInputElement>(null);

   const save = () => {
      //помещаем содержимое value в переменную
      const el = inputRef.current as HTMLInputElement;
      setValue(el.value)
   }
   //передаём в инпут то что записалось в хук
   return <>
      <input ref={inputRef} />
      <button onClick={save}>save</button>
      - actual value: {value}
   </>
}

export const ControlledInput = () => {
   const [parentValue, setParentValue] = useState('');
   const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setParentValue(e.currentTarget.value)
   };

   return <input value={parentValue} onChange={changeInput}/>
};

export const ControlledCheckbox = () => {
   const [parentValue, setParentValue] = useState(true);
   const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setParentValue(e.currentTarget.checked)
   };

   return <input type='checkbox' checked={parentValue}  onChange={changeInput}/>
};

export const ControlledSelect = () => {
   const [parentValue, setParentValue] = useState<string>('3');
   const changeInput = (e: ChangeEvent<HTMLSelectElement>) => {
      setParentValue(e.currentTarget.value)
   };

   return <select value={parentValue} onChange={changeInput}>
      <option >none</option>
      <option value="1">Minsk</option>
      <option value="2">Moscow</option>
      <option value="3">Kiev</option>
   </select>
};

export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>
