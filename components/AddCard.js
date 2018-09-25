import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  TextInput 
} from 'react-native';
import { 
  black, 
  white 
} from '../utils/colors'
import { 
  handleAddCardToDeck,
  handleGetDeck,
  handleGetDecks
} from '../actions/decks'
import { connect } from 'react-redux'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  handleSubmit() {
    const { question, answer } = this.state
    const { dispatch, deck, navigation } = this.props

    //If either question or answer are empty, stop
    if (question.length === 0 || answer.length === 0) {
      return
    }

    //Add the card to the deck
    dispatch(handleAddCardToDeck(deck.title, { question: question, answer: answer }))
    
    //Refresh the deck lists
    dispatch(handleGetDecks())

    //Reset the question and answer field
    this.setState({
      question: '',
      answer: ''
    })

    //Return to the deck view
    navigation.navigate('Home')
  }
  render() {

    const { deck } = this.props

    return (
      deck
      ? <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            Question
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput 
            onChangeText={(questionText) => this.setState({ question: questionText })}
            value={this.state.question}
            style={styles.textInput} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Answer
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput 
            onChangeText={(answerText) => this.setState({ answer: answerText })}
            value={this.state.answer}
            style={styles.textInput} />
        </View>
        <View>
          <TouchableOpacity 
            style={[styles.button, styles.blackButton]}
            onPress={() => this.handleSubmit()}>
            <Text style={styles.whiteText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      : null
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: '900',
    fontSize: 40
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
  }
})

function mapStateToProps({ deck }) {
  return {
    deck
  }
}

export default connect(mapStateToProps)(AddCard)