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
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

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
    navigationOptions: {
      headerTintColor: white,
      headerLeftTintColor: white,
      title: 'Deck',
      headerStyle: {
        backgroundColor: black
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerLeftTintColor: white,
      title: `Add Card`,
      headerStyle: {
        backgroundColor: black
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerLeftTintColor: white,
      title: `Quiz`,
      headerStyle: {
        backgroundColor: black
      }
    }
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