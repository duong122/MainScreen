import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

 const Render = ({item}) => {
  return(
    <View style={styles.subContainer}>
      <ImageBackground source={item.uri1}>
        <Image source={item.uri}/>
      </ImageBackground>
      <Text style={styles.address}> {item.address} </Text>
      <Text style={styles.city}> {item.city} </Text>
      <Image source={item.uri2} style={styles.star}/>
    </View>
  );
 }

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <FlatList
        data={slide}
        renderItem={({item, slide}) => <Render item={item}/>}
        />
        <FlatList
        data={slide2}
        renderItem={({item, slide2}) => <Render item={item}/>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  container2: {
    flexDirection: 'row',
    marginTop: 20,
    width: '98%',
  },
  subContainer: {
    marginHorizontal: 12,
    marginVertical: 16,
  },  
  address: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 8,
  },
  city: {
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 8,
  },
  start: {

  },
});
const slide = [
  {
    key: 1,
    address: 'One Mission Bay',
    city: 'San francisco',
    uri: require('../assets/img/1housephoto.png'),
    uri2: require('../assets/img/4Stars.png')
    
  },
  {
    key: 2,
    address: '246 Sussex St',
    city: 'San francisco',
    uri: require('../assets/img/3housephoto.png'),
    uri2: require('../assets/img/5Stars.png')
  },
  {
    key: 3,
    address: '1410 Steiner St',
    city: 'San francisco',
    uri: require('../assets/img/2housephoto.png'),
    uri2: require('../assets/img/4Stars.png')
  },
];

const slide2 = [
  {
    key: 4,
    address: '1206 Market St',
    city: 'San francisco',
    uri: require('../assets/img/4housephoto.png'),
    uri2: require('../assets/img/3Stars.png')
  },
  {
    key: 5,
    address: '1206 Market St',
    city: 'San francisco',
    uri: require('../assets/img/deborah-cortelazzi-615800-unsplash.png'),
    uri2: require('../assets/img/5Stars.png')
  },
  {
    key: 6,
    address: '1206 Market St',
    city: 'San francisco',
    uri: require('../assets/img/michael-browning-246513-unsplash.png'),
    uri2: require('../assets/img/5Stars.png')

  },
]
