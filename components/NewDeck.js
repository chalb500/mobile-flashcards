import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  TextInput 
} from 'react-native';
import {
  handleSaveDeckTitle,
  handleGetDeck,
  handleGetDecks
} from '../actions/decks'
import {
  connect
} from 'react-redux'
import { 
  black, 
  white 
} from '../utils/colors'

class NewDeck extends Component {
  state = {
    deckTitle: ''
  }
  handleOnPress() {
    const { deckTitle } = this.state
    const { dispatch, navigation, deck } = this.props

    if (deckTitle.length == 0) {
      return;
    }

    //Create the new deck
    dispatch(handleSaveDeckTitle(deckTitle))

    //Refresh the entire deck list
    dispatch(handleGetDecks())

    //Set the selected deck
    dispatch(handleGetDeck(deckTitle))

    //Reset the state
    this.setState({ 
      deckTitle: ''
    })

    //Navigate to the deck screen
    navigation.navigate('Deck', { deckTitle: deckTitle })
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>What is the title of your new deck?</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput 
            style={styles.textInput}
            placeholder="Deck Title"
            value={this.state.deckTitle}
            onChangeText={ (text) => this.setState({ deckTitle: text }) } />
        </View>
        <View>
          <TouchableOpacity 
            style={[styles.button, styles.blackButton]}
            onPress={() => this.handleOnPress()}>
            <Text style={styles.whiteText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputContainer: {
    borderColor: black,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    margin: 20,
    padding: 5,
    flexDirection: 'row'
  },
  textInput: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: black,
    flex: 1
  },
  text: {
    fontWeight: '900',
    fontSize: 40,
    textAlign: 'center'
  },
  button: {
    borderColor: black,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    margin: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 60,
    paddingRight: 60
  },
  blackButton: {
    backgroundColor: black
  },
  whiteText: {
    color: white
  }
})

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    decks: state.decks
  }
}

export default connect(mapStateToProps)(NewDeck)