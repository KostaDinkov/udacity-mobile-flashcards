import {ADD_CARD, CREATE_NEW_DECK, DELETE_DECK} from './actionTypes';

export function createNewDeck(deckId, deckName, deckCreated) {

  return {
    type: CREATE_NEW_DECK,
    deckId,
    deckName,
    deckCreated
  };
}

export function deleteDeck(deckId){
  return {
    type:DELETE_DECK,
    deckId
  }
}

export function addCard(deckId, cardId) {
  return {
    type:ADD_CARD,
    deckId,
    cardId
  };
}