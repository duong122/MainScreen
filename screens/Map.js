import React from "react";
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native'

export default function App (){
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/SanFranciscoMap.png')} style={styles.img}>
               <View style={styles.containText}>
                    <Text>
                        1117 Ocean Ave #204
                    </Text>
                    <Text style={styles.description}>
                        The residences at Ocean Avenue West embody modern...
                    </Text>
               </View>
            </ImageBackground>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containText: {
        width: '90%',
        height: 79,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    description: {
        fontSize: 12,
        fontWeight: '400'
    }
});