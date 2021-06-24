import React, {useState} from 'react';
import './App.scss';
// import {Select} from "./component/Select/Select";
import {SelectDimych} from "./component/SelectDimych/SelectDimych";
import {Clock} from "./component/Clock/Clock";
// import {Accordion} from './component/Accordion/Accordion';
// import {Rating, RatingValueType} from "./component/Raiting/Rating";
// import {OnOff} from "./component/OnOff/OnOff";
// import {UnControledOnOff} from './component/UnControledOnOff/UnControledOnOff';

//function declaration

function App() {

   // const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
   // const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
   // const [switchOn, setSwitchOn] = useState(false);
   // const [selectCollapsed, setSelectCollapsed] = useState<boolean>(true);
   // const [activeCities, setActiveCities] = useState('Select Cities');
   const [value, setValue] = useState('2');

   const selectItem = [
      {title: 'Moscow', value: '1'},
      {title: 'Kiev', value: '2'},
      {title: 'Minsk', value: '3'},
      {title: 'Paris', value: '4'}
   ]

   return (
      <div className="App">

         <Clock/>
         <br/><br/><br/><br/><br/>
         <SelectDimych items={selectItem} value={value} onChange={setValue} />

         {/*<Select*/}
         {/*   activeCities={activeCities}*/}
         {/*   setActiveCities={setActiveCities}*/}
         {/*   collapsed={selectCollapsed}*/}
         {/*   onChange={() => setSelectCollapsed(!selectCollapsed) }*/}
         {/*   items={selectItem}*/}
         {/*/>*/}

         {/*
         <OnOff on={switchOn} onChange={setSwitchOn}/>

         <Rating value={ratingValue} onClick={setRatingValue}/>

         <Accordion titleValue={'Menu'}
                    collapsed={accordionCollapsed}
                    setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
         />
         <UnControledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
         <UnControledAccordion titleValue={'Menu'}/>
         <PageTitle  style={{props.colors ? props.colors : 'blue'}} title={"This is APP component"}/>
         <Accordion titleValue={'Users'} collapsed={false}/>
         <Rating value={0}/>
         <Rating value={1}/>
         */}
      </div>
   );
}

export default App;
