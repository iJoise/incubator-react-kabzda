import {Rating, RatingPropsType, RatingValueType} from './Rating';
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
   title: 'Rating/Rating',
   component: Rating,
   argTypes: {
      value: {
         //Разворачиваем возвращаемое функцией
         ...categoryAsk('Value')
      }
   },
};

const callback = action('Want change rating')

export const ModeChanging: Story<RatingPropsType> = (args) => {
   const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
   return <Rating
                  value={ratingValue}
                  onClick={value => setRatingValue(value)}
   />
}

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const RatingModeValue1 = Template.bind({});
RatingModeValue1.args = {
   value: 1,
   onClick: callback
}

export const RatingModeValue2 = Template.bind({});
RatingModeValue2.args = {
   value: 5,
   onClick: callback
}