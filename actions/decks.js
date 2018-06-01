export const CREATE_NEW_DECK = 'CREATE_NEW_DECK';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_DECK= 'DELETE_DECK';

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