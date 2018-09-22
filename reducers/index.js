import { 
  ADD_CARD_TO_DECK,
  GET_DECK, 
  GET_DECKS 
} from '../actions/decks'

export default function reducer (state = {}, action) {
  switch(action.type) {
    case GET_DECK :
      return {
        ...state,
        ...action
      }
    case GET_DECKS : 
      return {
        ...state,
        ...action
      }
    case ADD_CARD_TO_DECK :
      return {
        ...state,
        [action.title]: action.card
      }
    default : 
      return state
  }
}