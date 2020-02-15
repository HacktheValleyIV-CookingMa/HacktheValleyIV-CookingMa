import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';


export default function Card(props) {
    return (

        <View style={styles.container}>
            <Image
            
                source = {require('../assets/images/robot-dev.png')}
            
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


