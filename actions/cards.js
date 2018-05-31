export const ADD_NEW_CARD = 'ADD_NEW_CARD';

export function addNewCard(card){
  return{
    type:ADD_NEW_CARD,
    card
  }
}