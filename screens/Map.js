import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native'

export default function App (){
    return(
        <View style={styles.container}>
            <Text>This is map screen</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});