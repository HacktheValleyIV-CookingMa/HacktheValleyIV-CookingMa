import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import bob from '../assets/images/robot-dev.png' ;


export default function Card(props) {
    return (

        <View style={styles.container}>
            <Image style= {{flex:1, maxWidth:500}}
            
                source = {bob}
            
            /> 
            <Text style={styles.descriptionText}>{props.text}</Text>

        </View>

    )
}

const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',
        minWidth: 200,
        margin: 8,
        flex: 1,
        backgroundColor: 'white'

    },

    descriptionText: {

        color: 'black',
        margin: 15,
        alignSelf: 'center',

    }



})


