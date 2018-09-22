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

//TODO - Remove debug
//import Reactotron from 'reactotron-react-native'
//Reactotron
//  .configure() // controls connection & communication settings
//  .useReactNative() // add all built-in react native plugins
//  .connect() // let's connect!

const Tabs = createMaterialTopTabNavigator({
  Decks: { 
    screen: DeckList,
    tabBarLabel: 'Decks'
  },
  NewDeck: {
    screen: NewDeck,
    tabBarLabel: 'New Deck'
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
      title: `${navigation.state.params.key}`,
      headerStyle: {
        backgroundColor: black
      }
    })
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
