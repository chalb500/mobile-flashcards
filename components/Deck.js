import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { black, white } from './../utils/colors'

class Deck extends Component {
  render(){
    const { deck } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.deckTitle}>{ deck.title }</Text>
        <Text style={styles.cardNumber}>
          {
            deck.questions.length === 1
              ? deck.questions.length + ' card'
              : deck.questions.length + ' cards'
          }
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={() => {}}
            style={styles.button}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {}}
            style={[styles.button, styles.startQuizButton]}>
            <Text style={[styles.buttonText, styles.startQuizButtonText]}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const { key } = navigation.state.params

  return {
    deck: decks[key]
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitle: {
    fontWeight: '900',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20
  },
  cardNumber: {
    textAlign: 'center',
    marginBottom: 40
  },
  buttonText: {
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
  startQuizButton: {
    backgroundColor: black
  },
  startQuizButtonText: {
    color: white
  }
});

export default connect(mapStateToProps)(Deck)