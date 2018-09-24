import React from 'react';
import { 
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import { white, black } from './utils/colors'

const store = createStore(reducer, middleware)

const Tabs = createMaterialTopTabNavigator({
  'Decks': { 
    screen: DeckList
  },
  'New Deck': {
    screen: NewDeck
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      title: `${navigation.state.params.deckTitle}`,
      headerStyle: {
        backgroundColor: black
      }
    })
  }
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App