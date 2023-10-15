import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const Render = ({ item }) => {
  return(
    <View style={styles.subContainer}>
      <ImageBackground source={item.uri} style={styles.img}>
        <Text style={styles.textDemo}> {item.text}</Text>
      </ImageBackground>
    </View>
  );
}
 
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <FlatList
        data={slide}
        renderItem={({item, slide}) => <Render item={item}/>}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    marginBottom: 20,
  },
  img: {
    height: 90,
    resizeMode: 'cover',
  },
  textDemo: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 90,
  }
});
const slide = [
  {
    key: 1,
    text: 'House',
    uri: require('../assets/img/Photo1.png'),
  },
  {
    key: 2,
    text: 'Apartment',
    uri: require('../assets/img/Photo2.png'),
  },
  {
    key: 3,
    text: 'Condos',
    uri: require('../assets/img/Photo3.png'),
  },
  {
    key: 4,
    text: 'Land',
    uri: require('../assets/img/Photo4.png'),
  },
  {
    key: 5,
    text: 'Building',
    uri: require('../assets/img/Photo5.png'),
  },
  {
    key: 6,
    text: 'Town Houses',
    uri: require('../assets/img/Photo6.png'),
  },
]