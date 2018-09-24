import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { 
  handleGetDecks,
  handleGetDeck
 } from '../actions/decks'
import { connect } from 'react-redux'

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    
    //Get the list of decks
    dispatch(handleGetDecks())
  }
  handleOnPress(key) {
    const { dispatch,  navigation } = this.props

    //Set the selected deck
    dispatch(handleGetDeck(key))

    //Navigate
    navigation.navigate('Deck', { deckTitle: key })
  }
  render() {

    const { decks } = this.props

    return (
      <ScrollView>
        {
          decks 
            ? Object.keys(decks).map((key) => (
              <View key={key} style={styles.bottomBorder}>
                <TouchableOpacity 
                  style={styles.deck} 
                  onPress={() => this.handleOnPress(key)}>
                    <Text style={styles.deckTitle}>
                        {decks[key].title}
                    </Text>
                    <Text style={styles.cardNumber}>
                      {
                        decks[key].questions.length === 1
                          ? decks[key].questions.length + ' card'
                          : decks[key].questions.length + ' cards'
                      }
                    </Text>
                </TouchableOpacity>
              </View>
            ))
            : null
        }
      </ScrollView>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

const styles = StyleSheet.create({
  deck: {
    padding: 40
  },
  deckTitle: {
    fontWeight: '900',
    fontSize: 20,
    textAlign: 'center'
  },
  cardNumber: {
    textAlign: 'center'
  },
  bottomBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default connect(mapStateToProps)(DeckList)