import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import {
  handleSaveDeckTitle,
  handleGetDeck,
  handleGetDecks,
  handleAddCardToDeck
} from '../actions/decks'
import {
  connect
} from 'react-redux'

class NewDeck extends Component {
  componentDidMount() {

    const { dispatch } = this.props
    
    dispatch(handleSaveDeckTitle('potato'))
    dispatch(handleAddCardToDeck('potato', { question: 'Please work', answer: 'Please do' }))
    dispatch(handleGetDeck('potato'))
    dispatch(handleGetDecks())
  }
  render() {
    return (
      <View>
        <Text>Here is the deck: { JSON.stringify(this.props.deck) }</Text>
        <Text>Here are the decks: { JSON.stringify(this.props.decks) }</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    decks: state.decks
  }
}

export default connect(mapStateToProps)(NewDeck)