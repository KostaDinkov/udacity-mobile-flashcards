import {ADD_CARD, CREATE_NEW_DECK, DELETE_DECK} from '../actions/decks';
import sampleData from '../util/sampleData'

const initialData = sampleData.decks;

export function decks(state = initialData, action) {
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
    case DELETE_DECK:

      let {[action.deckId]:value, ...filtered} = state;
      return {
        ...filtered
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