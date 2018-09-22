import { AsyncStorage } from 'react-native'

export function addCardToDeck( title, card ) {
  return AsyncStorage.getItem( title )
    .then(JSON.parse)
    .then((deck) => {
      //Add the card to the deck
      deck.questions.push(card)

      //Re-save the deck
      AsyncStorage.setItem(title, JSON.stringify(deck))
    })
}

export function saveDeckTitle( title ) {
  //Create the deck
  const deck = JSON.stringify({ title: title, questions: [] })

  //Save the deck
  AsyncStorage.setItem(title, deck)
}

export function getDeck(id) {
  return AsyncStorage.getItem(id)
    .then(JSON.parse)
}

export async function getDecks () {
  //Get the keys
  const keys = await AsyncStorage.getAllKeys()

  //Create the required JSON item
  const root = {}
  for (const item of keys) {
    root[item] = await getDeck(item)
  }

  return root
}