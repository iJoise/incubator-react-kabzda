export type ActionType = {
   type: string
}
export type StateType = {
   collapsed: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED';

export const reducer = (state: StateType, action: ActionType): StateType => {
   switch (action.type) {
      case TOGGLE_COLLAPSED:
         console.log(state)
         return {
            ...state,
            collapsed: !state.collapsed
         }
      default:
         throw new Error('Bad action type');
   }

   // if (action.type === TOGGLE_CONSTANT) {
   //    return !state;
   // }

   return state;
}