import {ADD_CARD, CREATE_NEW_DECK} from '../actions/decks';


export function decks(state = {}, action) {
  switch (action.type) {
    case CREATE_NEW_DECK:
      return{
        ...state,
        [action.deckId]:{
          id:action.deckId,
          cards:[],
          name:action.deckName,
          dateCreated:action.deckCreated
        }
      };
    case ADD_CARD:
      return{
        ...state,
        [action.deckId]:{
          ...state[action.deckId],
          cards:state[action.deckId].cards.concat(action.cardId)
        }
      };
    default:
      return state;
  }
}

export default decks