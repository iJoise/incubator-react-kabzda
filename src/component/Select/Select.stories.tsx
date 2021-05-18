import {Select, SelectPropsType} from './Select';
import React, {useState} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

//Функция для установки категории
const categoryAsk = (categoryName: string) => ({
   table: {
      category: categoryName
   }
})

export default {
   title: 'Select/Select',
   component: Select,
   argTypes: {},
};

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

export const ModeChanging: Story<SelectPropsType> = (args) => {
   const [selectCollapsed, setSelectCollapsed] = useState<boolean>(true);
   const [activeCities, setActiveCities] = useState('Select Cities');
   return <Select {...args}
                  collapsed={selectCollapsed}
                  onChange={() => setSelectCollapsed(!selectCollapsed)}
                  activeCities={activeCities}
                  setActiveCities={setActiveCities}
   />
}
ModeChanging.args = {
   items: [
      {title: 'Moscow', value: 1},
      {title: 'Kiev', value: 2},
      {title: 'Minsk', value: 3},
      {title: 'Paris', value: 4}
   ],
}