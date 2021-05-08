import React, {useState} from 'react';
import './App.scss';
import Accordion from './component/Accordion/Accordion';
import Rating, {RatingValueType} from "./component/Raiting/Rating";
import OnOff from "./component/OnOff/OnOff";
import UnControledOnOff from './component/UnControledOnOff/UnControledOnOff';

//function declaration

function App() {

   let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
   let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
   let [switchOn, setSwitchOn] = useState(false);

   return (
      <div className="App">

         <OnOff on={switchOn} onChange={setSwitchOn}/>

         <Rating value={ratingValue} onClick={setRatingValue}/>

         <Accordion titleValue={'Menu'}
                    collapsed={accordionCollapsed}
                    setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
         />
         <UnControledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
         {/*

         <UnControledAccordion titleValue={'Menu'}/>
         <PageTitle title={"This is APP component"}/>
         <Accordion titleValue={'Users'} collapsed={false}/>
         <Rating value={0}/>
         <Rating value={1}/>
         */}
      </div>
   );
}

export default App;
