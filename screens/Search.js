import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Render =({item}) => {
  return (
    <View style={styles.subContainer}>
      <View style={styles.containImage}>
        <Image source={item.uri} style={styles.img}></Image>
      </View>

      <View style={styles.Text}>
        <View style={styles.upperPos}>
          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.time}>
            {item.time}
          </Text>
        </View>

        <View style={styles.upperPos_under}>
        
        </View>

        <View style={styles.lowerPos}>
          <Text style={styles.city}>
            {item.city}
          </Text>
          <Text style={styles.price}>
            {item.price}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={({item, data}) => <Render item={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     marginTop: 10,
    width: '100%'
  },
  subContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 12,
    marginLeft: 20,
  },
  Text: {
    backgroundColor: '#fff',
  },
  img: {
    width: 100,
    height: 100,
  },
  containImage: {
    marginRight: 16,
  },

  upperPos: {
  },

  lowerPos: {
    flexDirection: 'row',  
    width: 230,
    justifyContent: 'space-between'
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4a4a4a',
    marginBottom: 6,
  },

  time: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4a4a4a',
    marginVertical: 12,
  },

  city: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4a4a4a',
    
  },

  price: {
  },

});

const data = [
  {
    name: 'One mission bay',
    time: '14 days ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/1housephoto.png'),
  },
  {
    name: '1410 Steiner St',
    time: '9 days ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/2housephoto.png'),
  },
  {
    name: '246 Sussex St',
    time: '7 days ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/3housephoto.png'),
  },
  {
    name: '1206 Market St',
    time: '2 hours ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/4housephoto.png'),
  },
  {
    name: '463 Eureka St',
    time: '4 days ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/deborah-cortelazzi-615800-unsplash.png'),
  },
  {
    name: '206 Ocean Ave #121',
    time: '2 hours ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/michael-browning-246513-unsplash.png'),
  },
]