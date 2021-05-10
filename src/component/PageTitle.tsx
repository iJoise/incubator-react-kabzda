import React from 'react';

export type PageTitlePropsType = {
   title: string
   /**
    * optional Color of header page
    */
   color?: string
}

export function PageTitle (props: PageTitlePropsType) {
   return (
      <h1>{props.title}</h1>
   );
}
