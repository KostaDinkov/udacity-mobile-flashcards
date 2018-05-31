export const CREATE_NEW_DECK = 'CREATE_NEW_DECK';
export const ADD_CARD = 'ADD_CARD';

export function createNewDeck(deckId, deckName, deckCreated) {

  return {
    type: CREATE_NEW_DECK,
    deckId,
    deckName,
    deckCreated
  };
}

export function addCard(deckId, cardId) {
  return {
    type:ADD_CARD,
    deckId,
    cardId
  };

}