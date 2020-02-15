import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

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
<View style={{flex:1, display:"flex",flexDirection:"row"}}>
        <Image
          style={styles.image}
          source={'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528'}
        />
        

        <Image
          style={styles.image}
          source={'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528'}
        />

        <Image
          style={styles.image}
          source={'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528'}
        />

</View>

            </View>
        );
    }
}

export default RandomizerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    paddingHorizontal: "8vw"
  },
  paragraphText: {
    color: 'white',
    paddingVertical: "0.75em",
    fontSize: 24,
  },
  image:{
    flex:1,
    margin:"1em",


  },
  button: {
    borderColor: 'white',
    borderWidth: 0.5,
    backgroundColor: '#0047AB',
    margin: 0,
    paddingHorizontal:"1em"
    
  },
});
