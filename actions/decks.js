import { 
  addCardToDeck, 
  saveDeckTitle, 
  getDeck, 
  getDecks  
} from '../utils/helpers'

export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const GET_DECK = 'GET_DECK'
export const GET_DECKS = 'GET_DECKS'

export function handleAddCardToDeck( title, card ) {
  return (dispatch) => {
    return addCardToDeck( title, card )
      .then(
        dispatch(addCard(title, card))
      )
  }
}

function addCard( title, card ) {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card
  }
}

export function handleSaveDeckTitle( title ) {
  return (dispatch) => {
    return saveDeckTitle( title )
  }
}

function saveDeck( title ) {
  return {
    type: SAVE_DECK_TITLE,
    title
  }
}

export function handleGetDeck( title ) {
  return (dispatch) => {
    return getDeck( title )
      .then((deck) => {
        dispatch(retrieveDeck( deck ))
      })
  }
}

function retrieveDeck( deck ) {
  return {
    type: GET_DECK,
    deck
  }
}

export function handleGetDecks() {
  return (dispatch) => {
    return getDecks()
      .then((decks) => {
        dispatch(retrieveDecks( decks ))
      })
  }
}

function retrieveDecks( decks ) {
  return {
    type: GET_DECKS,
    decks
  }
}