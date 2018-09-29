import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Animated
} from 'react-native'
import { connect } from 'react-redux'
import { black, white } from './../utils/colors'
import { handleGetDeck } from '../actions/decks'

class Deck extends Component {
  handleOnAddCardPress() {
    const { navigation } = this.props

    //Navigate to the add card view
    navigation.navigate('AddCard')
  }
  handleQuizPress() {
    const { navigation } = this.props
    const { deck } = this.props

    if (deck.questions.length === 0 ) {
      return
    }

    //Navigate to the quiz view
    navigation.navigate('Quiz')
  }
  render(){
    const { deck, titleAnim } = this.props

    //Grow the deck title
    Animated.timing(
      titleAnim,
      {
        toValue: 40,
        duration: 500
      }
    ).start()

    return (
      deck
      ? <View style={styles.container}>
          <Animated.Text style={[styles.deckTitle, { fontSize: titleAnim }]}>{ deck.title }</Animated.Text>
          <Text style={styles.cardNumber}>
            {
              deck.questions.length === 1
                ? deck.questions.length + ' card'
                : deck.questions.length + ' cards'
            }
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={() => this.handleOnAddCardPress()}
              style={styles.button}>
              <Text style={styles.buttonText}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.handleQuizPress()}
              style={[styles.button, styles.startQuizButton]}>
              <Text style={[styles.buttonText, styles.startQuizButtonText]}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      : <View />
    )
  }
}

function mapStateToProps({ deck }) {
  return {
    deck,
    titleAnim: new Animated.Value(0)
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
    //fontSize: 40,
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