import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card';

const food = ['apple', 'banana']

class RandomizerScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 }
      }

    onPress = () => {
        this.setState({
          count: this.state.count + 1
        })
      }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.paragraphText}>Testing</Text>
                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                    <Text style={styles.paragraphText}>What should I eat? </Text>
                </TouchableOpacity>
                

                <Text style={styles.paragraphText}>{food[this.state.count % 2]}</Text>
                <ScrollView>

                        <Card text = 'This is a card.'/>
                        <Card text = 'This is a card 1.'/>
                        <Card text = 'This is a card 2.'/>
                        <Card text = 'This is a card 3.'/>
                        <Card text = 'This is a card 4.'/>
                        <Card text = 'This is a card 5.'/>
                        <Card text = 'This is a card 6.'/>

                </ScrollView>

            </View>
        );
    }
}

export default RandomizerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    paddingHorizontal: 40
  },
  paragraphText: {
    color: 'white',
    paddingVertical: 8,
    fontSize: 24,
  },
  image:{
    flex:1,
    margin:8,
    minWidth:200


  },
  button: {
    borderColor: 'white',
    borderWidth: 0.5,
    backgroundColor: '#0047AB',
    margin: 0,
    paddingHorizontal:8
    
  },
});
